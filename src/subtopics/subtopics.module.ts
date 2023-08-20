import { Module } from '@nestjs/common';
import { SubtopicService } from './subtopics.service';
import { SubtopicsController } from './subtopics.controller';
import { SubtopicsResolver } from './subtopics.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [SubtopicsController],
  providers: [SubtopicService, SubtopicsResolver, PrismaService],
})
export class SubtopicsModule {}
