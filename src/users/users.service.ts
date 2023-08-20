import { Injectable } from '@nestjs/common';
import { User, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private readonly httpService: HttpService,
  ) {}
  async create(data: Prisma.UserCreateInput) {
    const newPassword = await bcrypt.hash(data.password, 10);
    Object.assign(data, { ...data, password: newPassword });
    console.log(data);
    return this.prisma.user.create({ data });
  }

  async sendInvitation(): Promise<any> {
    return this.httpService.post(
      'https://api.clerk.com/v1/invitations',
      { email_address: 'felipe.perez@colegiopucon.com' },
      {
        headers: {
          Authorization:
            'Bearer sk_test_9ne8uUgBIPiyY2pRnHSG7bgFPZsEP9ok7hXr1cdLzm',
          'Content-Type': 'application/json',
        },
      },
    );
  }

  findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  findOne(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  update(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { where, data } = params;
    return this.prisma.user.update({
      data,
      where,
    });
  }

  remove(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }

  scores(): Promise<User[]> {
    const rta = this.prisma.user.findMany({
      orderBy: [
        {
          stars: 'desc',
        },
      ],
    });
    // const rta = this.prisma.user.findMany({ order: { stars: 'DESC' } });
    return rta;
  }

  findByEmail(email: string): Promise<User> {
    return this.prisma.user.findUnique({ where: { email } });
  }
}
