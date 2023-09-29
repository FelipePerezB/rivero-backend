import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NoteCreateWithoutScoresInput } from './note-create-without-scores.input';
import { Type } from 'class-transformer';
import { NoteCreateOrConnectWithoutScoresInput } from './note-create-or-connect-without-scores.input';
import { NoteWhereUniqueInput } from './note-where-unique.input';

@InputType()
export class NoteCreateNestedOneWithoutScoresInput {

    @Field(() => NoteCreateWithoutScoresInput, {nullable:true})
    @Type(() => NoteCreateWithoutScoresInput)
    create?: NoteCreateWithoutScoresInput;

    @Field(() => NoteCreateOrConnectWithoutScoresInput, {nullable:true})
    @Type(() => NoteCreateOrConnectWithoutScoresInput)
    connectOrCreate?: NoteCreateOrConnectWithoutScoresInput;

    @Field(() => NoteWhereUniqueInput, {nullable:true})
    @Type(() => NoteWhereUniqueInput)
    connect?: NoteWhereUniqueInput;
}
