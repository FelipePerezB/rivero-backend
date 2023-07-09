import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Subject } from '../subject/subject.model';
import { Doc } from '../doc/doc.model';
import { Score } from '../score/score.model';
import { TopicCount } from './topic-count.output';

@ObjectType()
export class Topic {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt!: Date | null;

    @Field(() => Date, {nullable:true})
    updateAt!: Date | null;

    @Field(() => Int, {nullable:true})
    subjectId!: number | null;

    @Field(() => Subject, {nullable:true})
    subject?: Subject | null;

    @Field(() => [Doc], {nullable:true})
    Doc?: Array<Doc>;

    @Field(() => [Score], {nullable:true})
    Score?: Array<Score>;

    @Field(() => TopicCount, {nullable:false})
    _count?: TopicCount;
}
