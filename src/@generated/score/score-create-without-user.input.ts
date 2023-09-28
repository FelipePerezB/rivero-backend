import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NoteCreateNestedOneWithoutScoresInput } from '../note/note-create-nested-one-without-scores.input';

@InputType()
export class ScoreCreateWithoutUserInput {

    @Field(() => Int, {nullable:false})
    score!: number;

    @Field(() => String, {nullable:false})
    alternatives!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => NoteCreateNestedOneWithoutScoresInput, {nullable:true})
    Note?: NoteCreateNestedOneWithoutScoresInput;
}
