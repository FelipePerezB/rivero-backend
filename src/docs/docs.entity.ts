import { ObjectType, Field, Int, GraphQLISODateTime } from '@nestjs/graphql';
import { Subject } from 'src/school-entities/subjects/entities/subjects.entity';
import { Answer } from 'src/user-entities/answers/entities/answer.entity';
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

@Entity()
@ObjectType()
export class Doc {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  type: string;

  @Column()
  @Field()
  content: string;

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

  @ManyToOne(() => Subject, (subject) => subject.id, { nullable: true })
  @JoinColumn({ name: 'subject_id' })
  subjectId: Subject;

  @OneToMany(() => Answer, (answer) => answer.docId, { nullable: true })
  user_answers: Answer[];
}
