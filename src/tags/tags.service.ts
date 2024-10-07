import {
  BadRequestException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { Tag, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TagsService {
  constructor(private prisma: PrismaService) {}

  async create(createTagDto: CreateTagDto) {
    // return this.prisma.tag.create({ data });
    try {
      const findTag = await this.prisma.tag.findFirst({
        where: { title: createTagDto.title },
      });
      if (findTag) throw new BadRequestException('Title already exist');

      console.log(createTagDto.meta);

      const tag = await this.prisma.tag.create({
        data: {
          title: createTagDto.title,
          meta: createTagDto.meta,
        },
      });
      return tag;
    } catch (error) {
      return {
        status: error.status || HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
      };
    }
  }

  async findAll() {
    return this.prisma.tag.findMany();
  }

  async findOne(id: number): Promise<Tag | null> {
    return this.prisma.tag.findUnique({ where: { id } });
  }

  async update(id: number, updateTagDto: UpdateTagDto) {
    try {
      const findBlog = await this.prisma.tag.findUnique({
        where: {
          id: id,
        },
      });
      if (!findBlog) {
        throw new NotFoundException('User not found');
      }
      await this.prisma.tag.update({
        where: { id },
        data: {
          title: updateTagDto.title,
          meta: updateTagDto.meta,
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
    return `This action removes a #${id} tag`;
  }
}
