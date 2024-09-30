import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogCardDto, UpdateBlogDto } from './dto/update-blog.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('blogs')
@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Post()
  async create(@Body() createBlogDto: CreateBlogDto) {
    return this.blogsService.create(createBlogDto);
  }

  @Get('/cards')
  async findCardAll() {
    return this.blogsService.findCardAll();
  }

  @Get()
  async findAll() {
    return this.blogsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.blogsService.findOne(+id);
  }

  @Patch('/card/:id')
  async updateCard(@Param('id') id: string, @Body() data: UpdateBlogCardDto) {
    return this.blogsService.updateCard(Number(id), data);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateBlogDto: UpdateBlogDto) {
    return this.blogsService.update(Number(id), updateBlogDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.blogsService.remove(+id);
  }
}
