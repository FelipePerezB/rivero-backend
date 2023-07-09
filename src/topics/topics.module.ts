import { Module } from '@nestjs/common';
import { TopicsService } from './topics.service';
import { TopicsController } from './topics.controller';
import { PrismaService } from 'src/prisma.service';
import { TopicsResolver } from './topics.resolver';

@Module({
  controllers: [TopicsController],
  providers: [TopicsService, PrismaService, TopicsResolver],
})
export class TopicsModule {}
