import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.post.findMany({ where: { published: true } });
  }

  findOne(id: number) {
    return this.prisma.post.findUnique({ where: { id } });
  }
}
