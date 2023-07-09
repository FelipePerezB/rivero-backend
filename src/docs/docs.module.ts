import { Module } from '@nestjs/common';
import { DocsService } from './docs.service';
import { DocsController } from './docs.controller';
import { PrismaService } from 'src/prisma.service';
import { DocsResolver } from './docs.resolver';

@Module({
  controllers: [DocsController],
  providers: [DocsService, PrismaService, DocsResolver],
})
export class DocsModule {}
