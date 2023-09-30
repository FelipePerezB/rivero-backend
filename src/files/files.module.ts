import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { PrismaService } from 'src/prisma.service';
import { FilesResolver } from './files.resolver';

@Module({
  providers: [FilesService, PrismaService, FilesResolver],
})
export class FilesModule {}
