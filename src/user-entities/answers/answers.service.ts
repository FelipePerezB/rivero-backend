import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAnswerInput } from './dto/create-answer.input';
import { UpdateAnswerInput } from './dto/update-answer.input';
import { Answer } from './entities/answer.entity';

@Injectable()
export class AnswersService {
  constructor(@InjectRepository(Answer) private client: Repository<Answer>) {}

  async create(createAnswerInput: CreateAnswerInput) {
    const rta = await this.client.insert(createAnswerInput);
    return this.findOne(rta.identifiers[0].id);
  }

  async findAll(): Promise<Answer[]> {
    const rta = await this.client.find();
    return rta;
  }

  async findOne(id: number): Promise<Answer> {
    return await this.client.findOneBy({ id });
  }

  async update(id: number, updateAnswerInput: UpdateAnswerInput) {
    return this.client.update({ id }, updateAnswerInput);
  }

  async remove(id: number) {
    const row = await this.findOne(id);
    if (!row) throw new NotFoundException('Answer not found');
    await this.client.delete(row.id);
    return row;
  }
}
