import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Subject } from '../subject/subject.model';
import { Topic } from '../topic/topic.model';
import { User } from '../user/user.model';
import { Doc } from '../doc/doc.model';

@ObjectType()
export class Score {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    score!: number;

    @Field(() => Int, {nullable:false})
    subjectId!: number;

    @Field(() => Int, {nullable:false})
    topicId!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    correct!: number;

    @Field(() => Int, {nullable:false})
    total!: number;

    @Field(() => Int, {nullable:false})
    wrong!: number;

    @Field(() => Int, {nullable:false})
    null!: number;

    @Field(() => Int, {nullable:false})
    docId!: number;

    @Field(() => GraphQLJSON, {nullable:false})
    alternatives!: any;

    @Field(() => Date, {nullable:true})
    createdAt!: Date | null;

    @Field(() => Date, {nullable:true})
    updateAt!: Date | null;

    @Field(() => Subject, {nullable:false})
    subject?: Subject;

    @Field(() => Topic, {nullable:false})
    topic?: Topic;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Doc, {nullable:false})
    document?: Doc;
}
