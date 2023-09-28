import { Injectable } from '@nestjs/common';
import { Organization, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class OrganizationsService {
  constructor(private prisma: PrismaService) {}
  create(data: Prisma.OrganizationCreateInput): Promise<Organization> {
    return this.prisma.organization.create({
      data,
    });
  }

  findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.OrganizationWhereUniqueInput;
    where?: Prisma.OrganizationWhereInput;
    orderBy?: Prisma.OrganizationOrderByWithRelationInput;
  }): Promise<Organization[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.organization.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  findOne(
    organizationWhereUniqueInput: Prisma.OrganizationWhereUniqueInput,
  ): Promise<Organization | null> {
    return this.prisma.organization.findUnique({
      where: organizationWhereUniqueInput,
    });
  }

  update(params: {
    where: Prisma.OrganizationWhereUniqueInput;
    data: Prisma.OrganizationUpdateInput;
  }): Promise<Organization> {
    const { where, data } = params;
    return this.prisma.organization.update({
      data,
      where,
    });
  }

  remove(where: Prisma.OrganizationWhereUniqueInput): Promise<Organization> {
    return this.prisma.organization.delete({
      where,
    });
  }
}
