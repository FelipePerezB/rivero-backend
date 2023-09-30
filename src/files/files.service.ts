import { Injectable } from '@nestjs/common';
import { File, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class FilesService {
  constructor(private prisma: PrismaService) {}
  create(data: Prisma.FileCreateInput): Promise<File> {
    return this.prisma.file.create({
      data,
    });
  }

  findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.FileWhereUniqueInput;
    where?: Prisma.FileWhereInput;
    orderBy?: Prisma.FileOrderByWithRelationInput;
  }): Promise<File[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.file.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  findOne(where?: Prisma.FileWhereUniqueInput): Promise<File | null> {
    return this.prisma.file.findUnique({
      where,
    });
  }

  update(params: {
    where: Prisma.FileWhereUniqueInput;
    data: Prisma.FileUpdateInput;
  }): Promise<File> {
    const { where, data } = params;
    return this.prisma.file.update({
      data,
      where,
    });
  }

  remove(where: Prisma.FileWhereUniqueInput): Promise<File> {
    return this.prisma.file.delete({
      where,
    });
  }
}
