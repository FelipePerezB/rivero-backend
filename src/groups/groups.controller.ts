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
import { GroupsService } from './groups.service';
import { Group, Prisma } from '@prisma/client';

@Controller('grades')
export class GroupsController {
  constructor(private readonly gradesService: GroupsService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  findAll(): Promise<Group[]> {
    return this.gradesService.findAll({});
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  async signupUser(@Body() gradeData: Prisma.GroupCreateInput): Promise<Group> {
    return this.gradesService.create(gradeData);
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Group> {
    return this.gradesService.findOne({ id });
  }

  @HttpCode(HttpStatus.OK)
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Prisma.GroupUpdateInput,
  ): Promise<Group> {
    return this.gradesService.update({ where: { id }, data });
  }

  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.gradesService.remove({ id });
  }
}
