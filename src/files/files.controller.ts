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
import { FilesService } from './files.service';
import { Prisma, File } from '@prisma/client';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  findAll(): Promise<File[]> {
    return this.filesService.findAll({});
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  async createFile(@Body() fileData: Prisma.FileCreateInput): Promise<File> {
    return this.filesService.create(fileData);
  }

  @HttpCode(HttpStatus.OK)
  @Get(':externalId')
  findOne(@Param('externalId') externalId: string): Promise<File> {
    return this.filesService.findOne({ externalId });
  }

  @HttpCode(HttpStatus.OK)
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Prisma.FileUpdateInput,
  ): Promise<File> {
    return this.filesService.update({ where: { id }, data });
  }

  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.filesService.remove({ id });
  }
}
