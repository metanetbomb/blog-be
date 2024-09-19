import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateBlogDto } from './create-blog.dto';
import { blog_status } from '@prisma/client';

export class UpdateBlogDto extends PartialType(CreateBlogDto) {}

export class UpdateBlogCardDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  is_pined: boolean;
  @ApiProperty()
  status: blog_status;
}
