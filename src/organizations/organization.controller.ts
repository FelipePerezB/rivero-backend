import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { OrganizationsService } from './organization.service';
import { Prisma, Organization } from '@prisma/client';

@Controller('organizations')
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  findAll(): Promise<Organization[]> {
    return this.organizationsService.findAll({});
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  async signupUser(
    @Body() subjectData: Prisma.OrganizationCreateInput,
  ): Promise<Organization> {
    return this.organizationsService.create(subjectData);
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Organization> {
    return this.organizationsService.findOne({ id });
  }

  @HttpCode(HttpStatus.OK)
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Prisma.OrganizationUpdateInput,
  ): Promise<Organization> {
    return this.organizationsService.update({ where: { id }, data });
  }

  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.organizationsService.remove({ id });
  }
}
