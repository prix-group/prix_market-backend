import {
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('posts')
@ApiTags('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @ApiOperation({ summary: 'Get All Posts' })
  @ApiResponse({ status: 200 })
  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @ApiOperation({ summary: 'Get Post By Id' })
  @ApiResponse({ status: 200 })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    const post = this.postsService.findOne(id);

    if (!post) {
      throw new NotFoundException(`Post with ${id} does not exist.`);
    }

    return post;
  }
}
