import { ApiProperty } from '@nestjs/swagger';
import { $Enums, Prisma } from '@prisma/client';

export class CreateBlogDto {
  @ApiProperty()
  title: string;
  @ApiProperty()
  url: string;
}

// export class CreateBlogDto1 implements Prisma.BlogCreateInput {
//   image?: string;
//   content?: string;
//   published?: boolean;
//   date?: string | Date;
//   create_at?: string | Date;
//   update_at?: string | Date;
//   last_edit_id: number;
//   view?: number;
//   is_pined?: boolean;
//   status?: $Enums.blog_status;
//   tags?: Prisma.TagCreateNestedManyWithoutBlogInput;
//   creator: Prisma.UserCreateNestedOneWithoutBlogInput;
//   @ApiProperty()
//   title: string;
//   @ApiProperty()
//   url: string;
// }
