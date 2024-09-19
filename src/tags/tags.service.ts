import { Injectable } from '@nestjs/common';
// import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { Tag, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TagsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.TagCreateInput): Promise<Tag> {
    return this.prisma.tag.create({ data });
  }

  findAll() {
    return this.prisma.tag.findMany();
  }

  findOne(id: number): Promise<Tag | null> {
    return this.prisma.tag.findUnique({ where: { id } });
  }

  update(id: number, updateTagDto: UpdateTagDto) {
    return `This action updates a #${id} tag`;
  }

  remove(id: number) {
    return `This action removes a #${id} tag`;
  }
}
