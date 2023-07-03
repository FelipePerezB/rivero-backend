import { Module } from '@nestjs/common';
import { DocsService } from './docs.service';
import { DocsResolver } from './docs.resolver';
import { Doc } from './docs.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [DocsResolver, DocsService],
  imports: [TypeOrmModule.forFeature([Doc])],
})
export class DocsModule {}
