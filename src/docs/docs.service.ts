import { Injectable } from '@nestjs/common';
import { Doc, Grade, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class DocsService {
  constructor(private prisma: PrismaService) {}
  create(data: Prisma.DocCreateInput): Promise<Doc> {
    const grades = data.grades as Grade[];
    const gradesId = data.grades.createMany.data as any;
    return this.prisma.doc.create({
      data: {
        ...data,
        // grades: {
        // createMany: {
        //   data: [
        //     {
        //       gradeId: 1,
        //     },
        //   ],
        // },
        //   data: grades.map((grade) => ({
        //     gradeId: grade.id,
        //   })),
        // },
        // create: gradesId?.map(({ gradeId }) => ({
        //   updateAt: new Date(),
        //   createdAt: new Date(),
        //   grade: {
        //     connect: {
        //       id: gradeId,
        //     },
        // connectOrCreate: {
        //   where: {
        //     id,
        //   },
        //   create: {
        //     grade,
        //     id,
        //   },
        // },
        // },
        // })),
        // },
      },
      include: {
        grades: {
          include: {
            grade: true,
          },
        },
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
      include: {
        grades: {
          include: {
            grade: true
          }
        },
      },
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
