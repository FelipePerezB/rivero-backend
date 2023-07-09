import { Module } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { SubjectsController } from './subjects.controller';
import { PrismaService } from 'src/prisma.service';
import { SubjectsResolver } from './subjects.resolver';

@Module({
  controllers: [SubjectsController],
  providers: [SubjectsService, PrismaService, SubjectsResolver],
})
export class SubjectsModule {}
