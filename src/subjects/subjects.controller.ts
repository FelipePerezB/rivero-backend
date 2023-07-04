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
import { SubjectsService } from './subjects.service';
import { Prisma, Subject } from '@prisma/client';

@Controller('subjects')
export class SubjectsController {
  constructor(private readonly subjectsService: SubjectsService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  findAll(): Promise<Subject[]> {
    return this.subjectsService.findAll({});
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  async signupUser(
    @Body() subjectData: Prisma.SubjectCreateInput,
  ): Promise<Subject> {
    return this.subjectsService.create(subjectData);
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Subject> {
    return this.subjectsService.findOne({ id });
  }

  @HttpCode(HttpStatus.OK)
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Prisma.SubjectUpdateInput,
  ): Promise<Subject> {
    return this.subjectsService.update({ where: { id }, data });
  }

  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.subjectsService.remove({ id });
  }
}
