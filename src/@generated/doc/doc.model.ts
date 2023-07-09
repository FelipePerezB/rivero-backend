import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Int } from '@nestjs/graphql';
import { Subject } from '../subject/subject.model';
import { Topic } from '../topic/topic.model';
import { GradesOnDocs } from '../grades-on-docs/grades-on-docs.model';
import { Score } from '../score/score.model';
import { DocCount } from './doc-count.output';

@ObjectType()
export class Doc {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    type!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    content!: any;

    @Field(() => Date, {nullable:true})
    createdAt!: Date | null;

    @Field(() => Date, {nullable:true})
    updateAt!: Date | null;

    @Field(() => Int, {nullable:false})
    subjectId!: number;

    @Field(() => Int, {nullable:false})
    topicId!: number;

    @Field(() => Subject, {nullable:false})
    subject?: Subject;

    @Field(() => Topic, {nullable:false})
    topic?: Topic;

    @Field(() => [GradesOnDocs], {nullable:true})
    grades?: Array<GradesOnDocs>;

    @Field(() => [Score], {nullable:true})
    Score?: Array<Score>;

    @Field(() => DocCount, {nullable:false})
    _count?: DocCount;
}
