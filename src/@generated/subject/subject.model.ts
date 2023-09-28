import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Topic } from '../topic/topic.model';
import { Subtopic } from '../subtopic/subtopic.model';
import { Note } from '../note/note.model';
import { SubjectCount } from './subject-count.output';

@ObjectType()
export class Subject {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    color!: string;

    @Field(() => Date, {nullable:true})
    createdAt!: Date | null;

    @Field(() => Date, {nullable:true})
    updateAt!: Date | null;

    @Field(() => [Topic], {nullable:true})
    Topics?: Array<Topic>;

    @Field(() => [Subtopic], {nullable:true})
    Subtopic?: Array<Subtopic>;

    @Field(() => [Note], {nullable:true})
    Notes?: Array<Note>;

    @Field(() => SubjectCount, {nullable:false})
    _count?: SubjectCount;
}
