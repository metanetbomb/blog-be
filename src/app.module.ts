import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogsModule } from './blogs/blogs.module';
import { PrismaService } from './prisma.service';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [BlogsModule, TagsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
