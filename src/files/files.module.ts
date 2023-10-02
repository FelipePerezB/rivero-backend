import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { PrismaService } from 'src/prisma.service';
import { FilesResolver } from './files.resolver';
import { FilesController } from './files.controller';

@Module({
  providers: [FilesService, PrismaService, FilesResolver],
  controllers: [FilesController],
})
export class FilesModule {}
