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
import { GradesService } from './grades.service';
import { Grade, Prisma } from '@prisma/client';
import { GradeCreateInput } from 'src/@generated/grade/grade-create.input';
import { GradeUpdateInput } from 'src/@generated/grade/grade-update.input';

@Controller('grades')
export class GradesController {
  constructor(private readonly gradesService: GradesService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  findAll(): Promise<Grade[]> {
    return this.gradesService.findAll({});
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  async signupUser(@Body() gradeData: Prisma.GradeCreateInput): Promise<Grade> {
    return this.gradesService.create(gradeData);
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Grade> {
    return this.gradesService.findOne({ id });
  }

  @HttpCode(HttpStatus.OK)
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Prisma.GradeUpdateInput,
  ): Promise<Grade> {
    return this.gradesService.update({ where: { id }, data });
  }

  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.gradesService.remove({ id });
  }
}
