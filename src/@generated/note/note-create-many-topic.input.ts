import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class NoteCreateManyTopicInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    subjectId?: number;

    @Field(() => Int, {nullable:false})
    subtopicId!: number;

    @Field(() => Int, {nullable:false})
    fileId!: number;
}