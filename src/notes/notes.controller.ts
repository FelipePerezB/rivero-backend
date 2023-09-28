import {
  Controller,
  Get,
  Body,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { Note, Prisma } from '@prisma/client';

@Controller('docs')
export class NotesController {
  constructor(private readonly docsService: NotesService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  findAll(): Promise<Note[]> {
    return this.docsService.findAll({});
  }

  // @HttpCode(HttpStatus.CREATED)
  // @Post()
  // async createNote(@Body() docData: Prisma.NoteCreateInput): Promise<Note> {
  //   return this.docsService.create(docData);
  // }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Note> {
    return this.docsService.findOne({ id });
  }

  @HttpCode(HttpStatus.OK)
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Prisma.NoteUpdateInput,
  ): Promise<Note> {
    return this.docsService.update({ where: { id }, data });
  }

  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.docsService.remove({ id });
  }
}
