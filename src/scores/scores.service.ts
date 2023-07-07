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
      cursor,
      where,
      orderBy,
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
