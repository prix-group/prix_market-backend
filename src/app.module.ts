import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PostsModule, UsersModule, PrismaModule],
  controllers: [],
})
export class AppModule {}
