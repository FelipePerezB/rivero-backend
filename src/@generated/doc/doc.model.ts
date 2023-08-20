import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Privacity } from '../prisma/privacity.enum';
import { DocTypes } from '../prisma/doc-types.enum';
import { Int } from '@nestjs/graphql';
import { Topic } from '../topic/topic.model';
import { User } from '../user/user.model';
import { Score } from '../score/score.model';
import { Subtopic } from '../subtopic/subtopic.model';
import { DocCount } from './doc-count.output';

@ObjectType()
export class Doc {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Privacity, {nullable:false})
    privacity!: keyof typeof Privacity;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => DocTypes, {nullable:false})
    type!: keyof typeof DocTypes;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Int, {nullable:false})
    topicId!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Date, {nullable:true})
    createdAt!: Date | null;

    @Field(() => Date, {nullable:true})
    updateAt!: Date | null;

    @Field(() => Int, {nullable:true})
    subtopicId!: number | null;

    @Field(() => Topic, {nullable:false})
    topic?: Topic;

    @Field(() => User, {nullable:false})
    author?: User;

    @Field(() => [Score], {nullable:true})
    Score?: Array<Score>;

    @Field(() => Subtopic, {nullable:true})
    Subtopic?: Subtopic | null;

    @Field(() => DocCount, {nullable:false})
    _count?: DocCount;
}
