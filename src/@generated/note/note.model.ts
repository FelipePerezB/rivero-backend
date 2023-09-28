import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Subject } from '../subject/subject.model';
import { Topic } from '../topic/topic.model';
import { Subtopic } from '../subtopic/subtopic.model';
import { File } from '../file/file.model';
import { Score } from '../score/score.model';
import { NoteCount } from './note-count.output';

@ObjectType()
export class Note {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    subjectId!: number | null;

    @Field(() => Int, {nullable:true})
    topicId!: number | null;

    @Field(() => Int, {nullable:false})
    subtopicId!: number;

    @Field(() => Int, {nullable:false})
    fileId!: number;

    @Field(() => Subject, {nullable:true})
    Subject?: Subject | null;

    @Field(() => Topic, {nullable:true})
    Topic?: Topic | null;

    @Field(() => Subtopic, {nullable:false})
    Subtopic?: Subtopic;

    @Field(() => File, {nullable:false})
    File?: File;

    @Field(() => [Score], {nullable:true})
    Scores?: Array<Score>;

    @Field(() => NoteCount, {nullable:false})
    _count?: NoteCount;
}
