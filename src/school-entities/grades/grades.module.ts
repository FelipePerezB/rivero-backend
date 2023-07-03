import { Module } from '@nestjs/common';
import { GradesService } from './grades.service';
import { GradesResolver } from './grades.resolver';
import { Grade } from './entities/grade.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/user-entities/users/users.module';

@Module({
  providers: [GradesResolver, GradesService],
  imports: [TypeOrmModule.forFeature([Grade]), UsersModule],
})
export class GradesModule {}
