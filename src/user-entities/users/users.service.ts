import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
import { PrismaService } from '../../prisma.service';
import { User, Prisma } from '@prisma/client';
// import { Repository } from 'typeorm';
// import { User } from './user.entity';
import { CreateUserInput, UpdateUserInput } from './user.input';
// import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  // constructor(@InjectRepository(User) private client: Repository<User>) {}
  constructor(private prisma: PrismaService) {}

  async scores(): Promise<User[]> {
    const rta = await this.prisma.user.findMany({
      orderBy: [
        {
          stars: 'desc',
        },
      ],
    });
    // const rta = await this.prisma.user.findMany({ order: { stars: 'DESC' } });
    return rta;
  }

  async findByEmail(email: string): Promise<User> {
    return await this.prisma.user.findUnique({ where: { email } });
  }

  async create(user: CreateUserInput | any) {
    // const newPassword = await bcrypt.hash(user.password, 10);
    // const dbUser = await this.prisma.user.create({
    //   ...user,
    //   // password: newPassword,
    // });
    // const newUser = {
    //   ...user,
    //   // ...dbUser.generatedMaps[0],
    // };
    return await this.prisma.user.create({ data: user });
  }

  async findAll(): Promise<User[]> {
    const rta = await this.prisma.user.findMany();
    return rta;
  }

  async findOne(id: number): Promise<User> {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  async update(id: number, updateUserInput: UpdateUserInput | any) {
    await this.prisma.user.update({
      data: updateUserInput,
      where: {
        id,
      },
    });
    return await this.findOne(id);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    if (!user) throw new NotFoundException('User not found');
    await this.prisma.user.delete({ where: { id: user.id } });
    return user;
  }
  async user(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async users(params: {
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

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  async updateUser(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { where, data } = params;
    return this.prisma.user.update({
      data,
      where,
    });
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }
}
