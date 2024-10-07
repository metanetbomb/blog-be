import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateBlogDto } from './create-blog.dto';
import { blog_status } from '@prisma/client';

// export class UpdateBlogDto extends PartialType(CreateBlogDto) {}
export class UpdateBlogDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  title: string;
  @ApiProperty()
  url: string;
  @ApiProperty()
  image: string;
  @ApiProperty()
  content: string;

  @ApiProperty()
  date: Date;
  @ApiProperty()
  last_edit_id: number;
}

export class UpdateBlogCardDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  is_pined: boolean;
  @ApiProperty()
  status: blog_status;
}

export class UpdateBlogTagDto {
  @ApiProperty()
  blog_id: number;
  @ApiProperty()
  tag_id: boolean;
}
