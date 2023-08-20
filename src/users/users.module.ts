import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
// import { UsersResolver } from './users.resolver';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/prisma.service';
import { UsersResolver } from './users.resolver';
import {HttpModule} from '@nestjs/axios'

@Module({
  imports: [HttpModule],
  controllers: [UsersController],
  providers: [UsersService, PrismaService, UsersResolver],
  exports: [UsersService],
})
export class UsersModule {}
