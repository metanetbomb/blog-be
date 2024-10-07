import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BlogTagService } from './blog_tag.service';
import { CreateBlogTagDto } from './dto/create-blog_tag.dto';
import { UpdateBlogTagDto } from './dto/update-blog_tag.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('blog-tag')
@Controller('blog-tag')
export class BlogTagController {
  constructor(private readonly blogTagService: BlogTagService) {}

  @Post()
  async create(@Body() createBlogTagDto: CreateBlogTagDto) {
    return this.blogTagService.create(createBlogTagDto);
  }

  @Get('blog_id/:blog_id')
  async findAll(@Param('blog_id') blog_id: string) {
    return this.blogTagService.findAll(Number(blog_id));
  }

  // @Get(':id')
  // async findOne(@Param('id') id: string) {
  //   return this.blogTagService.findOne(Number(id));
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateBlogTagDto: UpdateBlogTagDto) {
  //   return this.blogTagService.update(+id, updateBlogTagDto);
  // }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.blogTagService.remove(+id);
  }
}
