import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInstituteInput } from './dto/create-institute.input';
import { UpdateInstituteInput } from './dto/update-institute.input';
import { Institute } from './entities/institute.entity';

@Injectable()
export class InstitutesService {
  constructor(
    @InjectRepository(Institute) private client: Repository<Institute>,
  ) {}

  async create(createInstituteInput: CreateInstituteInput) {
    const rta = await this.client.insert(createInstituteInput);
    return this.findOne(rta.identifiers[0].id);
  }

  async findAll(): Promise<Institute[]> {
    const rta = await this.client.find();
    return rta;
  }

  async findOne(id: number): Promise<Institute> {
    return await this.client.findOneBy({ id });
  }

  async update(id: number, updateInstituteInput: UpdateInstituteInput) {
    return this.client.update({ id }, updateInstituteInput);
  }

  async remove(id: number) {
    const row = await this.findOne(id);
    if (!row) throw new NotFoundException('Institute not found');
    await this.client.delete(row.id);
    return row;
  }
}
