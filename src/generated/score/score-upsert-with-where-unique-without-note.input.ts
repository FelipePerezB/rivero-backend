import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScoreWhereUniqueInput } from './score-where-unique.input';
import { Type } from 'class-transformer';
import { ScoreUpdateWithoutNoteInput } from './score-update-without-note.input';
import { ScoreCreateWithoutNoteInput } from './score-create-without-note.input';

@InputType()
export class ScoreUpsertWithWhereUniqueWithoutNoteInput {

    @Field(() => ScoreWhereUniqueInput, {nullable:false})
    @Type(() => ScoreWhereUniqueInput)
    where!: ScoreWhereUniqueInput;

    @Field(() => ScoreUpdateWithoutNoteInput, {nullable:false})
    @Type(() => ScoreUpdateWithoutNoteInput)
    update!: ScoreUpdateWithoutNoteInput;

    @Field(() => ScoreCreateWithoutNoteInput, {nullable:false})
    @Type(() => ScoreCreateWithoutNoteInput)
    create!: ScoreCreateWithoutNoteInput;
}
