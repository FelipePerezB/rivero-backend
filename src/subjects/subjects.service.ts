import { Injectable } from '@nestjs/common';
import { Subject, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SubjectsService {
  constructor(private prisma: PrismaService) {}
  create(data: Prisma.SubjectCreateInput): Promise<Subject> {
    return this.prisma.subject.create({
      data,
    });
  }

  findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.SubjectWhereUniqueInput;
    where?: Prisma.SubjectWhereInput;
    orderBy?: Prisma.SubjectOrderByWithRelationInput;
  }): Promise<Subject[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.subject.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: {
        topics: true,
      },
    });
  }

  findOne(
    subjectWhereUniqueInput: Prisma.SubjectWhereUniqueInput,
  ): Promise<Subject | null> {
    return this.prisma.subject.findUnique({
      where: subjectWhereUniqueInput,
    });
  }

  update(params: {
    where: Prisma.SubjectWhereUniqueInput;
    data: Prisma.SubjectUpdateInput;
  }): Promise<Subject> {
    const { where, data } = params;
    return this.prisma.subject.update({
      data,
      where,
    });
  }

  remove(where: Prisma.SubjectWhereUniqueInput): Promise<Subject> {
    return this.prisma.subject.delete({
      where,
    });
  }
}
