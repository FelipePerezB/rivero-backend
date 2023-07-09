import { Module } from '@nestjs/common';
import { ScoresService } from './scores.service';
import { ScoresController } from './scores.controller';
import { PrismaService } from 'src/prisma.service';
import { ScoresResolver } from './scores.resolver';

@Module({
  controllers: [ScoresController],
  providers: [ScoresService, PrismaService, ScoresResolver],
})
export class ScoresModule {}
