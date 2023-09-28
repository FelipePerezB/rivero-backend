import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class NoteMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    subjectId?: number;

    @Field(() => Int, {nullable:true})
    topicId?: number;

    @Field(() => Int, {nullable:true})
    subtopicId?: number;

    @Field(() => Int, {nullable:true})
    fileId?: number;
}
