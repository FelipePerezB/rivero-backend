import { Injectable } from '@nestjs/common';
import { Grade, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class GradesService {
  constructor(private prisma: PrismaService) {}
  create(data: Prisma.GradeCreateInput): Promise<Grade> {
    return this.prisma.grade.create({
      data,
    });
  }

  findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.GradeWhereUniqueInput;
    where?: Prisma.GradeWhereInput;
    orderBy?: Prisma.GradeOrderByWithRelationInput;
  }): Promise<Grade[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.grade.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  findOne(
    gradeWhereUniqueInput: Prisma.GradeWhereUniqueInput,
  ): Promise<Grade | null> {
    return this.prisma.grade.findUnique({
      where: gradeWhereUniqueInput,
    });
  }

  update(params: {
    where: Prisma.GradeWhereUniqueInput;
    data: Prisma.GradeUpdateInput;
  }): Promise<Grade> {
    const { where, data } = params;
    return this.prisma.grade.update({
      data,
      where,
    });
  }

  remove(where: Prisma.GradeWhereUniqueInput): Promise<Grade> {
    return this.prisma.grade.delete({
      where,
    });
  }
}
