import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Subject } from '../subject/subject.model';
import { Subtopic } from '../subtopic/subtopic.model';
import { Note } from '../note/note.model';
import { TopicCount } from './topic-count.output';

@ObjectType()
export class Topic {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:true})
    subjectId!: number | null;

    @Field(() => Date, {nullable:true})
    createdAt!: Date | null;

    @Field(() => Date, {nullable:true})
    updateAt!: Date | null;

    @Field(() => Subject, {nullable:true})
    Subject?: Subject | null;

    @Field(() => [Subtopic], {nullable:true})
    Subtopics?: Array<Subtopic>;

    @Field(() => [Note], {nullable:true})
    Notes?: Array<Note>;

    @Field(() => TopicCount, {nullable:false})
    _count?: TopicCount;
}
