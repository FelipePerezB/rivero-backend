import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subject } from './entities/subjects.entity';
import { CreateSubjectInput } from './dto/create-subject.input';
import { UpdateSubjectInput } from './dto/update-subject.input';

@Injectable()
export class SubjectsService {
  constructor(@InjectRepository(Subject) private client: Repository<Subject>) {}

  async create(createSubjectInput: CreateSubjectInput) {
    const rta = await this.client.insert(createSubjectInput);
    return this.findOne(rta.identifiers[0].id);
  }

  async findAll(): Promise<Subject[]> {
    const rta = await this.client.find();
    return rta;
  }

  async findOne(id: number): Promise<Subject> {
    return await this.client.findOneBy({ id });
  }

  async update(id: number, updateDocInput: UpdateSubjectInput) {
    return this.client.update({ id }, updateDocInput);
  }

  async remove(id: number) {
    const row = await this.findOne(id);
    if (!row) throw new NotFoundException('Subject not found');
    await this.client.delete(row.id);
    return row;
  }
}
