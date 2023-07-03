import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDocInput } from './create-doc.input';
import { UpdateDocInput } from './update-doc.input';
import { Doc } from './docs.entity';

@Injectable()
export class DocsService {
  constructor(@InjectRepository(Doc) private client: Repository<Doc>) {}

  async create(createDocInput: CreateDocInput) {
    const rta = await this.client.insert(createDocInput);
    return this.findOne(rta.identifiers[0].id);
  }

  async findAll(): Promise<Doc[]> {
    const rta = await this.client.find();
    return rta;
  }

  async findOne(id: number): Promise<Doc> {
    return await this.client.findOneBy({ id });
  }

  async update(id: number, updateDocInput: UpdateDocInput) {
    return this.client.update({ id }, updateDocInput);
  }

  async remove(id: number) {
    const row = await this.findOne(id);
    if (!row) throw new NotFoundException('Doc not found');
    await this.client.delete(row.id);
    return row;
  }
}
