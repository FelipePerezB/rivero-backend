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
} from '@nestjs/common';
import { SubtopicService } from './subtopics.service';
import { Prisma, Subtopic } from '@prisma/client';

@Controller('subtopics')
export class SubtopicsController {
  constructor(private readonly subtopicsService: SubtopicService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  findAll(): Promise<Subtopic[]> {
    return this.subtopicsService.findAll({});
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  async signupUser(
    @Body() subjectData: Prisma.SubtopicCreateInput,
  ): Promise<Subtopic> {
    return this.subtopicsService.create(subjectData);
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Subtopic> {
    return this.subtopicsService.findOne({ id });
  }

  @HttpCode(HttpStatus.OK)
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Prisma.SubtopicUpdateInput,
  ): Promise<Subtopic> {
    return this.subtopicsService.update({ where: { id }, data });
  }

  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.subtopicsService.remove({ id });
  }
}
