import { Module } from '@nestjs/common';
import { OrganizationsService } from './organization.service';
import { OrganizationsController } from './organization.controller';
import { PrismaService } from 'src/prisma.service';
import { OrganizationsResolver } from './organization.resolver';

@Module({
  controllers: [OrganizationsController],
  providers: [OrganizationsService, PrismaService, OrganizationsResolver],
})
export class OrganizationsModule {}
