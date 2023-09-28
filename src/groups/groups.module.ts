import { Module } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { GroupsController } from './groups.controller';
import { PrismaService } from 'src/prisma.service';
import { GroupsResolver } from './groups.resolver';

@Module({
  controllers: [GroupsController],
  providers: [GroupsService, PrismaService, GroupsResolver],
})
export class GroupsModule {}
