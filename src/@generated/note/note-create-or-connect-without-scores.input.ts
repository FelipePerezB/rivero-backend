import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NoteWhereUniqueInput } from './note-where-unique.input';
import { Type } from 'class-transformer';
import { NoteCreateWithoutScoresInput } from './note-create-without-scores.input';

@InputType()
export class NoteCreateOrConnectWithoutScoresInput {

    @Field(() => NoteWhereUniqueInput, {nullable:false})
    @Type(() => NoteWhereUniqueInput)
    where!: NoteWhereUniqueInput;

    @Field(() => NoteCreateWithoutScoresInput, {nullable:false})
    @Type(() => NoteCreateWithoutScoresInput)
    create!: NoteCreateWithoutScoresInput;
}
