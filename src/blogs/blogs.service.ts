import {
  BadRequestException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogCardDto, UpdateBlogDto } from './dto/update-blog.dto';
import { PrismaService } from 'src/prisma.service';
import { blog_status } from '@prisma/client';

@Injectable()
export class BlogsService {
  constructor(private prisma: PrismaService) {}

  async create(createBlogDto: CreateBlogDto) {
    try {
      const findEmail = await this.prisma.blog.findFirst({
        where: { title: createBlogDto.title },
      });
      if (findEmail) throw new BadRequestException('Title already exist');

      const findUrl = await this.prisma.blog.findFirst({
        where: { url: createBlogDto.url },
      });
      if (findUrl) throw new BadRequestException('Url already exist');

      const blog = await this.prisma.blog.create({
        data: {
          title: createBlogDto.title,
          url: createBlogDto.url,
          date: new Date(),
          create_at: new Date(),
          update_at: new Date(),
          creator_id: 1,
          last_edit_id: 1,
          image: null,
          content: null,
          status: blog_status.CREATED,
          published: false,
          is_pined: false,
          view: 0,
        },
      });
      return blog;
    } catch (error) {
      return {
        status: error.status || HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
      };
    }
  }

  async findCardAll() {
    const users = await this.prisma.blog.findMany({
      select: {
        id: true,
        date: true,
        create_at: true,
        title: true,
        url: true,
        is_pined: true,
        status: true,
      },
    });
    return users;
  }

  async findAll() {
    return await this.prisma.blog.findMany();
  }

  async findOne(id: number) {
    const blog = await this.prisma.blog.findUnique({ where: { id } });
    blog.view += 1;
    return blog;
  }

  async updateCard(id: number, updateBlogCardDto: UpdateBlogCardDto) {
    try {
      if (id != updateBlogCardDto.id) {
        throw new NotFoundException('id not match');
      }
      const findUser = await this.prisma.blog.findUnique({
        where: {
          id: id,
        },
      });
      if (!findUser) {
        throw new NotFoundException('User not found');
      }
      await this.prisma.blog.update({
        where: { id },
        data: {
          id: updateBlogCardDto.id,
          is_pined: updateBlogCardDto.is_pined,
          status: updateBlogCardDto.status,
          published:
            updateBlogCardDto.status == blog_status.SHOW ? true : false,
        },
      });

      return {
        // message: 'success',
        // data: updateBlog,
        status: HttpStatus.NO_CONTENT,
      };
    } catch (error) {
      return {
        message: error.message,
        status: error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      };
    }
  }

  async update(id: number, updateBlogDto: UpdateBlogDto) {
    try {
      if (id != updateBlogDto.id) {
        throw new NotFoundException('id not match');
      }
      const findBlog = await this.prisma.blog.findUnique({
        where: {
          id: id,
        },
      });
      if (!findBlog) {
        throw new NotFoundException('User not found');
      }
      await this.prisma.blog.update({
        where: { id },
        data: {
          title: updateBlogDto.title,
          url: updateBlogDto.url,
          image: updateBlogDto.image,
          content: updateBlogDto.content,
          date: updateBlogDto.date,
          last_edit_id: updateBlogDto.last_edit_id,
        },
      });

      return {
        // message: 'success',
        // data: updateBlog,
        status: HttpStatus.NO_CONTENT,
      };
    } catch (error) {
      return {
        message: error.message,
        status: error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      };
    }
  }

  async remove(id: number) {
    return await this.prisma.blog.delete({ where: { id } });
  }
}
