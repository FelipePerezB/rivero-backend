import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserInput, UpdateUserInput } from './user.input';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private client: Repository<User>) {}

  async scores(): Promise<User[]> {
    const rta = await this.client.find({ order: { stars: 'DESC' } });
    return rta;
  }

  async findByEmail(email: string): Promise<User> {
    return await this.client.findOneBy({ email });
  }

  async create(user: CreateUserInput) {
    const newPassword = await bcrypt.hash(user.password, 10);
    const dbUser = await this.client.insert({
      ...user,
      password: newPassword,
    });
    const newUser = {
      ...user,
      ...dbUser.generatedMaps[0],
    };
    return newUser;
  }

  async findAll(): Promise<User[]> {
    const rta = await this.client.find();
    return rta;
  }

  async findOne(id: number): Promise<User> {
    return await this.client.findOneBy({ id });
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    await this.client.update({ id }, updateUserInput);
    return await this.findOne(id);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    if (!user) throw new NotFoundException('User not found');
    await this.client.delete(user.id);
    return user;
  }
}
