import { Module } from '@nestjs/common';
import { DocsService } from './docs.service';
import { DocsController } from './docs.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [DocsController],
  providers: [DocsService, PrismaService],
})
export class DocsModule {}
