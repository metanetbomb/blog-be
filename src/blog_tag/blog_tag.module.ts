import { Module } from '@nestjs/common';
import { BlogTagService } from './blog_tag.service';
import { BlogTagController } from './blog_tag.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [BlogTagController],
  providers: [BlogTagService, PrismaService],
})
export class BlogTagModule {}
