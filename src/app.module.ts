import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [PostsModule, PrismaModule, ConfigModule.forRoot()],
  controllers: [],
})
export class AppModule {}
