import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGradeInput } from './dto/create-grade.input';
import { UpdateGradeInput } from './dto/update-grade.input';
import { Grade } from './entities/grade.entity';

@Injectable()
export class GradesService {
  constructor(
    @InjectRepository(Grade) private client: Repository<Grade>,
  ) {}
  
  async create(createGradeInput: CreateGradeInput) {
    const rta = await this.client.insert(createGradeInput);
    return this.findOne(rta.identifiers[0].id);
  }

  async findAll(): Promise<Grade[]> {
    const rta = await this.client.find();
    return rta;
  }

  async findOne(id: number): Promise<Grade> {
    return await this.client.findOneBy({ id });
  }

  async update(id: number, updateGradeInput: UpdateGradeInput) {
    return this.client.update({ id }, updateGradeInput);
  }

  async remove(id: number) {
    const row = await this.findOne(id);
    if (!row) throw new NotFoundException('Grade not found');
    await this.client.delete(row.id);
    return row;
  }
}
