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
import { DocsService } from './docs.service';
import { Prisma, Doc } from '@prisma/client';

@Controller('docs')
export class DocsController {
  constructor(private readonly docsService: DocsService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  findAll(): Promise<Doc[]> {
    return this.docsService.findAll({});
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  async createDoc(@Body() docData: Prisma.DocCreateInput): Promise<Doc> {
    return this.docsService.create(docData);
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Doc> {
    return this.docsService.findOne({ id });
  }

  @HttpCode(HttpStatus.OK)
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Prisma.DocUpdateInput,
  ): Promise<Doc> {
    return this.docsService.update({ where: { id }, data });
  }

  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.docsService.remove({ id });
  }
}
