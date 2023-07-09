import { Module } from '@nestjs/common';
import { SchoolsService } from './schools.service';
import { SchoolsController } from './schools.controller';
import { PrismaService } from 'src/prisma.service';
import { SchoolsResolver } from './schools.resolver';

@Module({
  controllers: [SchoolsController],
  providers: [SchoolsService, PrismaService, SchoolsResolver],
})
export class SchoolsModule {}
