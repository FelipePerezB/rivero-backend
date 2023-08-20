import { Injectable } from '@nestjs/common';
import { Subtopic, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SubtopicService {
  constructor(private prisma: PrismaService) {}
  create(data: Prisma.SubtopicCreateInput): Promise<Subtopic> {
    return this.prisma.subtopic.create({
      data,
    });
  }

  findAll(params: { where?: Prisma.SubtopicWhereInput }): Promise<Subtopic[]> {
    const { where } = params;
    return this.prisma.subtopic.findMany({
      where,
      include: {
        Topic: true,
        Docs: true,
      },
    });
  }

  findOne(
    subtopicWhereUniqueInput: Prisma.SubtopicWhereUniqueInput,
  ): Promise<Subtopic | null> {
    return this.prisma.subtopic.findUnique({
      where: subtopicWhereUniqueInput,
    });
  }

  update(params: {
    where: Prisma.SubtopicWhereUniqueInput;
    data: Prisma.SubtopicUpdateInput;
  }): Promise<Subtopic> {
    const { where, data } = params;
    return this.prisma.subtopic.update({
      data,
      where,
    });
  }

  remove(where: Prisma.SubtopicWhereUniqueInput): Promise<Subtopic> {
    return this.prisma.subtopic.delete({
      where,
    });
  }
}
