import { Injectable } from '@nestjs/common';
import { Note, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class NotesService {
  constructor(private prisma: PrismaService) {}
  create(data: Prisma.NoteCreateInput): Promise<Note> {
    return this.prisma.note.create({
      data,
      include: {
        Topic: true,
      },
    });
  }

  findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.NoteWhereUniqueInput;
    where?: Prisma.NoteWhereInput;
    orderBy?: Prisma.NoteOrderByWithRelationInput;
  }): Promise<Note[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.note.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: {
        File: true,
      },
    });
  }

  findOne(where?: Prisma.NoteWhereUniqueInput): Promise<Note | null> {
    return this.prisma.note.findUnique({
      where,
    });
  }

  update(params: {
    where: Prisma.NoteWhereUniqueInput;
    data: Prisma.NoteUpdateInput;
  }): Promise<Note> {
    const { where, data } = params;
    return this.prisma.note.update({
      data,
      where,
    });
  }

  remove(where: Prisma.NoteWhereUniqueInput): Promise<Note> {
    return this.prisma.note.delete({
      where,
    });
  }
}
