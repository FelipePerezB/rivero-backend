import { Field, GraphQLISODateTime, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Doc } from '../../../docs/docs.entity';
import { Institute } from '../../institutes/entities/institute.entity';

@Entity()
@ObjectType()
export class Subject {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column({ unique: true })
  @Field()
  name: string;

  @Column({ unique: true })
  @Field()
  color: string;

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

  @OneToMany(() => Doc, (doc) => doc.subjectId)
  docs: Doc[];

  @ManyToMany(() => Institute, (institute) => institute.subjects)
  institutes: Institute[];
}
