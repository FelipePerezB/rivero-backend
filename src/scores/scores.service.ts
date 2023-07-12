import { Injectable } from '@nestjs/common';
import { Score, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ScoresService {
  constructor(private prisma: PrismaService) {}
  create(data: Prisma.ScoreCreateInput): Promise<Score> {
    return this.prisma.score.create({
      data,
    });
  }

  gradeAvg() {
    return this.prisma.score.groupBy({
      by: ['docId'],
      _avg: {
        score: true,
      },
    });
  }

  async groupBySubject(gradeId: number, schoolId: number) {
    const data = await this.prisma.score.findMany({
      where: {
        user: {
          gradeId,
          schoolId,
        },
      },
      select: {
        docId: true,
        userId: true,
        score: true,
      },
    });
    const res = data.map((score) => ({}));
    return data;
  }

  async findScores() {
    const data = await this.prisma.topic.findMany({
      where: {
        name: {
          startsWith: 'Ensayo',
        },
      },
      select: {
        subject: {
          select: {
            id: true,
            name: true,
            color: true,
          },
        },
        Doc: {
          select: {
            title: true,
            id: true,
            Score: {
              select: {
                score: true,
                userId: true,
              },
            },
          },
        },
      },
    });
    const res = {};
    data.forEach(({ subject, Doc }) => {
      const docs = {};
      Doc.forEach((doc) => {
        const scores = {};
        doc.Score.forEach(({ score, userId }) => {
          scores[userId] = score ?? {};
        });
        docs[doc.title] = { ...scores } ?? {};
      });
      res[subject?.name] = { docs: docs, color: subject.color } ?? {};
    });
    return res;
  }

  findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ScoreWhereUniqueInput;
    where?: Prisma.ScoreWhereInput;
    orderBy?: Prisma.ScoreOrderByWithRelationInput;
  }): Promise<Score[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.score.findMany({
      skip,
      take,
      where,
    });
  }

  findOne(
    scoreWhereUniqueInput: Prisma.ScoreWhereUniqueInput,
  ): Promise<Score | null> {
    return this.prisma.score.findUnique({
      where: scoreWhereUniqueInput,
    });
  }

  update(params: {
    where: Prisma.ScoreWhereUniqueInput;
    data: Prisma.ScoreUpdateInput;
  }): Promise<Score> {
    const { where, data } = params;
    return this.prisma.score.update({
      data,
      where,
    });
  }

  remove(where: Prisma.ScoreWhereUniqueInput): Promise<Score> {
    return this.prisma.score.delete({
      where,
    });
  }
}
