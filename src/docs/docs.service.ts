import { Injectable } from '@nestjs/common';
import { Doc, Grade, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class DocsService {
  constructor(private prisma: PrismaService) {}
  create(data: Prisma.DocCreateInput): Promise<Doc> {
    const grades = data.grades as Grade[];
    return this.prisma.doc.create({
      data: {
        ...data,
        grades: {
          create: grades.map(({ grade, id }) => ({
            updateAt: new Date(),
            createdAt: new Date(),
            grade: {
              connectOrCreate: {
                where: {
                  id,
                },
                create: {
                  grade,
                  id,
                },
              },
            },
          })),
        },
      },
      include: {
        grades: true,
        subject: true,
        topic: true,
      },
    });
  }

  findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.DocWhereUniqueInput;
    where?: Prisma.DocWhereInput;
    orderBy?: Prisma.DocOrderByWithRelationInput;
  }): Promise<Doc[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.doc.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  findOne(
    docWhereUniqueInput: Prisma.DocWhereUniqueInput,
  ): Promise<Doc | null> {
    return this.prisma.doc.findUnique({
      where: docWhereUniqueInput,
      include: {
        grades: true,
        subject: true,
        topic: true,
      },
    });
  }

  update(params: {
    where: Prisma.DocWhereUniqueInput;
    data: Prisma.DocUpdateInput;
  }): Promise<Doc> {
    const { where, data } = params;
    return this.prisma.doc.update({
      data,
      where,
    });
  }

  remove(where: Prisma.DocWhereUniqueInput): Promise<Doc> {
    return this.prisma.doc.delete({
      where,
    });
  }
}
