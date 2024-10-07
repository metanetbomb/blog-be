import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TagsService } from './tags.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { ApiTags } from '@nestjs/swagger';
import { Tag as TagModel } from '@prisma/client';

@ApiTags('tags')
@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Post()
  async create(@Body() createTagDto: CreateTagDto) {
    // return this.tagsService.create({
    //   title: createTagDto.title,
    //   meta: createTagDto.meta,
    // });
    console.log(createTagDto.meta);
    return this.tagsService.create({
      title: createTagDto.title,
      meta: createTagDto.meta,
    });
  }

  @Get()
  async findAll() {
    return this.tagsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.tagsService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTagDto: UpdateTagDto) {
    return this.tagsService.update(Number(id), updateTagDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.tagsService.remove(+id);
  }
}
