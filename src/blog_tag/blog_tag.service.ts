import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateBlogTagDto } from './dto/create-blog_tag.dto';
// import { UpdateBlogTagDto } from './dto/update-blog_tag.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BlogTagService {
  constructor(private prisma: PrismaService) {}
  async create(createBlogTagDto: CreateBlogTagDto) {
    try {
      const findTag = await this.prisma.blog_Tag.findFirst({
        where: {
          blog_id: createBlogTagDto.blog_id,
          tag_id: createBlogTagDto.tag_id,
        },
      });
      if (findTag) throw new BadRequestException('Tag already exist');

      const blogTag = await this.prisma.blog_Tag.create({
        data: {
          blog_id: createBlogTagDto.blog_id,
          tag_id: createBlogTagDto.tag_id,
        },
      });
      return blogTag;
    } catch (error) {
      return {
        status: error.status || HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
      };
    }
  }

  async findAll(blog_id: number) {
    console.log('id:' + blog_id);
    return await this.prisma.blog_Tag.findMany({ where: { blog_id } });
  }

  // async findOne(id: number) {
  //   const blog = await this.prisma.blog_Tag.findUnique({ where: { id } });
  //   return blog;
  // }

  // update(id: number, updateBlogTagDto: UpdateBlogTagDto) {
  //   return `This action updates a #${id} blogTag`;
  // }

  async remove(id: number) {
    return await this.prisma.blog_Tag.delete({ where: { id } });
  }
}
