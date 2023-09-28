import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
  Put,
  Query,
} from '@nestjs/common';
import { TopicsService } from './topics.service';
import { Prisma, Topic } from '@prisma/client';

@Controller('topics')
export class TopicsController {
  constructor(private readonly topicsService: TopicsService) {}
  @HttpCode(HttpStatus.OK)
  @Get()
  findAlAl(
    @Query('grade') gradeId: string | undefined,
    @Query('subject') subjectId: string | undefined,
  ): Promise<any[]> {
    if (gradeId && subjectId) {
      return this.topicsService.findByGradeAndSubject({
        gradeId: Number(gradeId),
        subjectId: Number(subjectId),
      });
    } else {
      return this.topicsService.findAll({});
    }
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  async signupUser(
    @Body() topictData: Prisma.TopicCreateInput,
  ): Promise<Topic> {
    return this.topicsService.create(topictData);
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Topic> {
    return this.topicsService.findOne({ id });
  }

  @HttpCode(HttpStatus.OK)
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Prisma.TopicUpdateInput,
  ): Promise<Topic> {
    return this.topicsService.update({ where: { id }, data });
  }

  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.topicsService.remove({ id });
  }
}
