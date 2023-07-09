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
import { SchoolsService } from './schools.service';
import { Prisma, School } from '@prisma/client';
import { SchoolUpdateInput } from 'src/@generated/school/school-update.input';
import { SchoolCreateInput } from 'src/@generated/school/school-create.input';

@Controller('schools')
export class SchoolsController {
  constructor(private readonly schoolsService: SchoolsService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  findAll(): Promise<School[]> {
    return this.schoolsService.findAll({});
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  async signupUser(
    @Body() subjectData: Prisma.SchoolCreateInput,
  ): Promise<School> {
    return this.schoolsService.create(subjectData);
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<School> {
    return this.schoolsService.findOne({ id });
  }

  @HttpCode(HttpStatus.OK)
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Prisma.SchoolUpdateInput,
  ): Promise<School> {
    return this.schoolsService.update({ where: { id }, data });
  }

  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.schoolsService.remove({ id });
  }
}
