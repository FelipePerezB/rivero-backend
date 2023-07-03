import { Module } from '@nestjs/common';
import { InstitutesService } from './institutes.service';
import { InstitutesResolver } from './institutes.resolver';
import { Institute } from './entities/institute.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [InstitutesResolver, InstitutesService],
  imports: [TypeOrmModule.forFeature([Institute])],
})
export class InstitutesModule {}
