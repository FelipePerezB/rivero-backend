import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { PrismaService } from 'src/prisma.service';
import { NotesResolver } from './notes.resolver';

@Module({
  controllers: [NotesController],
  providers: [NotesService, PrismaService, NotesResolver],
})
export class NotesModule {}
