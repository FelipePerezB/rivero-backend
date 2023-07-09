import { Module } from '@nestjs/common';
import { GradesService } from './grades.service';
import { GradesController } from './grades.controller';
import { PrismaService } from 'src/prisma.service';
import { GradesResolver } from './grades.resolver';

@Module({
  controllers: [GradesController],
  providers: [GradesService, PrismaService, GradesResolver],
})
export class GradesModule {}
