import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScoreWhereUniqueInput } from './score-where-unique.input';
import { Type } from 'class-transformer';
import { ScoreCreateWithoutNoteInput } from './score-create-without-note.input';

@InputType()
export class ScoreCreateOrConnectWithoutNoteInput {

    @Field(() => ScoreWhereUniqueInput, {nullable:false})
    @Type(() => ScoreWhereUniqueInput)
    where!: ScoreWhereUniqueInput;

    @Field(() => ScoreCreateWithoutNoteInput, {nullable:false})
    @Type(() => ScoreCreateWithoutNoteInput)
    create!: ScoreCreateWithoutNoteInput;
}
