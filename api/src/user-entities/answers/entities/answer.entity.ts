import { ObjectType, Field, Int, GraphQLISODateTime } from '@nestjs/graphql';
import { Doc } from 'api/src/docs/docs.entity';
import { User } from 'api/src/user-entities/users/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Answer {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Field()
  @Column()
  answers: string;

  @Field(() => Int, { nullable: true })
  @Column()
  score: number;

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

  @ManyToOne(() => Doc, (doc) => doc.id, { nullable: true })
  @JoinColumn({ name: 'doc_id' })
  docId: Doc;

  @ManyToOne(() => User, (user) => user.id, { nullable: true })
  @JoinColumn({ name: 'user_id' })
  userId: User;
}
