import { Injectable } from '@nestjs/common';
import { School, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SchoolsService {
  constructor(private prisma: PrismaService) {}
  create(data: Prisma.SchoolCreateInput): Promise<School> {
    return this.prisma.school.create({
      data,
    });
  }

  findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.SchoolWhereUniqueInput;
    where?: Prisma.SchoolWhereInput;
    orderBy?: Prisma.SchoolOrderByWithRelationInput;
  }): Promise<School[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.school.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  findOne(
    schoolWhereUniqueInput: Prisma.SchoolWhereUniqueInput,
  ): Promise<School | null> {
    return this.prisma.school.findUnique({
      where: schoolWhereUniqueInput,
    });
  }

  update(params: {
    where: Prisma.SchoolWhereUniqueInput;
    data: Prisma.SchoolUpdateInput;
  }): Promise<School> {
    const { where, data } = params;
    return this.prisma.school.update({
      data,
      where,
    });
  }

  remove(where: Prisma.SchoolWhereUniqueInput): Promise<School> {
    return this.prisma.school.delete({
      where,
    });
  }
}
