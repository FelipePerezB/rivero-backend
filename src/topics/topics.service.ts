import { Injectable } from '@nestjs/common';
import { Topic, Prisma } from '@prisma/client';
import { TopicCreateInput } from 'src/@generated/topic/topic-create.input';
import { TopicUpdateInput } from 'src/@generated/topic/topic-update.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TopicsService {
  constructor(private prisma: PrismaService) {}
  create(data: Prisma.TopicCreateInput): Promise<Topic> {
    return this.prisma.topic.create({
      data,
    });
  }

  findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.TopicWhereUniqueInput;
    where?: Prisma.TopicWhereInput;
    orderBy?: Prisma.TopicOrderByWithRelationInput;
  }): Promise<Topic[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.topic.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  findByGradeAndSubject({
    subjectId,
    gradeId,
  }: {
    subjectId: number;
    gradeId: number;
  }): Promise<any[]> {
    return this.prisma.topic.findMany({
      where: {
        Doc: {
          some: {
            subjectId,
          },
        },
      },
      select: {
        id: true,
        name: true,
        Doc: {
          select: {
            title: true,
            id: true,
          },
          where: {
            subjectId,
            grades: {
              some: {
                gradeId,
              },
            },
          },
        },
      },
    });
  }

  findOne(
    topicWhereUniqueInput: Prisma.TopicWhereUniqueInput,
  ): Promise<Topic | null> {
    return this.prisma.topic.findUnique({
      where: topicWhereUniqueInput,
    });
  }

  update(params: {
    where: Prisma.TopicWhereUniqueInput;
    data: Prisma.TopicUpdateInput;
  }): Promise<Topic> {
    const { where, data } = params;
    return this.prisma.topic.update({
      data,
      where,
    });
  }

  remove(where: Prisma.TopicWhereUniqueInput): Promise<Topic> {
    return this.prisma.topic.delete({
      where,
    });
  }
}
