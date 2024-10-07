import { ApiProperty } from '@nestjs/swagger';

export class CreateBlogTagDto {
  @ApiProperty()
  blog_id: number;
  @ApiProperty()
  tag_id: number;
}
