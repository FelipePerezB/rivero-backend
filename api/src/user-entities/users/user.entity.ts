import { Field, GraphQLISODateTime, Int, ObjectType } from '@nestjs/graphql';
import { Exclude } from 'class-transformer';
import { Grade } from 'api/src/school-entities/grades/entities/grade.entity';
import { Institute } from 'api/src/school-entities/institutes/entities/institute.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Answer } from '../answers/entities/answer.entity';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  lastname: string;

  @Field()
  @Column()
  nickname: string;

  @Column({ unique: true })
  @Field()
  email: string;

  @Exclude()
  @Column()
  @Field()
  password: string;

  @Column()
  @Field()
  role: string;

  @Column()
  @Field(() => Int)
  stars: number;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'created_at',
  })
  @Field(() => GraphQLISODateTime)
  createdAt: string;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'updated_at',
  })
  @Field(() => GraphQLISODateTime, { nullable: true })
  updatedAt: string;

  @ManyToOne(() => Grade, (grade) => grade.id, { nullable: true })
  @JoinColumn({ name: 'grade_id' })
  gardeId: number;

  @ManyToOne(() => Institute, (institute) => institute.id, { nullable: true })
  @JoinColumn({ name: 'institute_id' })
  instituteId: number;

  @OneToMany(() => User, (user) => user.id, { nullable: true })
  answers: Answer[];
}
