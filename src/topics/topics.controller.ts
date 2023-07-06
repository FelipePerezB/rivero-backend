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
  findAll(): Promise<Topic[]> {
    return this.topicsService.findAll({});
  }

  @HttpCode(HttpStatus.OK)
  @Get()
  findByGradeAndSubject(
    @Query('grade') grade: string[1],
    @Query('subject') subject: string[],
  ): Promise<{ name: string; Doc: { id: number; title: string }[] }[]> {
    const gradeId = Number(grade[0]);
    const subjectId = Number(subject[0]);
    return this.topicsService.findByGradeAndSubject({
      gradeId,
      subjectId,
    });
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
