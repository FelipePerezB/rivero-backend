import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Subject } from '../subject/subject.model';
import { Topic } from '../topic/topic.model';
import { Doc } from '../doc/doc.model';
import { SubtopicCount } from './subtopic-count.output';

@ObjectType()
export class Subtopic {

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

    @Field(() => Int, {nullable:false})
    topicId!: number;

    @Field(() => Subject, {nullable:true})
    subject?: Subject | null;

    @Field(() => Topic, {nullable:false})
    Topic?: Topic;

    @Field(() => [Doc], {nullable:true})
    Doc?: Array<Doc>;

    @Field(() => SubtopicCount, {nullable:false})
    _count?: SubtopicCount;
}
