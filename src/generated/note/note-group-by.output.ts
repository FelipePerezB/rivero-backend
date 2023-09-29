import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Types } from '../prisma/types.enum';
import { NoteCountAggregate } from './note-count-aggregate.output';
import { NoteAvgAggregate } from './note-avg-aggregate.output';
import { NoteSumAggregate } from './note-sum-aggregate.output';
import { NoteMinAggregate } from './note-min-aggregate.output';
import { NoteMaxAggregate } from './note-max-aggregate.output';

@ObjectType()
export class NoteGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    subjectId?: number;

    @Field(() => Int, {nullable:true})
    topicId?: number;

    @Field(() => Int, {nullable:false})
    subtopicId!: number;

    @Field(() => Int, {nullable:true})
    fileId?: number;

    @Field(() => Types, {nullable:false})
    type!: keyof typeof Types;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => NoteCountAggregate, {nullable:true})
    _count?: NoteCountAggregate;

    @Field(() => NoteAvgAggregate, {nullable:true})
    _avg?: NoteAvgAggregate;

    @Field(() => NoteSumAggregate, {nullable:true})
    _sum?: NoteSumAggregate;

    @Field(() => NoteMinAggregate, {nullable:true})
    _min?: NoteMinAggregate;

    @Field(() => NoteMaxAggregate, {nullable:true})
    _max?: NoteMaxAggregate;
}
