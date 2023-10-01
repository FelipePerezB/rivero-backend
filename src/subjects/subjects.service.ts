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
    cursor?: Prisma.FileWhereUniqueInput;
    where?: Prisma.FileWhereInput;
    orderBy?: Prisma.FileOrderByWithRelationInput;
  }): Promise<Subject[]> {
    const { skip, take, orderBy } = params;
    return this.prisma.subject.findMany({
      skip,
      take,
      orderBy,
      include: {
        Topics: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  findOne(
    subjectWhereUniqueInput: Prisma.SubjectWhereUniqueInput,
  ): Promise<Subject | null> {
    return this.prisma.subject.findUnique({
      where: subjectWhereUniqueInput,
      include: {
        Notes: {
          select: {
            type: true,
            File: {
              select: {
                externalId: true,
              },
            },
          },
        },
        Topics: {
          select: {
            id: true,
            name: true,
          },
        },
      },
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
