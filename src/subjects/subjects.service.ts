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

  findAll(params: { where?: Prisma.SubjectWhereInput }): Promise<Subject[]> {
    const { where } = params;
    return this.prisma.subject.findMany({
      where,
      include: {
        _count: true,
        Topics: {
          include: {
            Subtopics: {
              include: {
                Docs: {
                  select: {
                    title: true,
                    id: true,
                  },
                },
              },
            },
            _count: {
              select: {
                Docs: true,
              },
            },
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
