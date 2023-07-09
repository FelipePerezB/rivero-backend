import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScoreWhereUniqueInput } from './score-where-unique.input';
import { Type } from 'class-transformer';
import { ScoreUpdateWithoutSubjectInput } from './score-update-without-subject.input';
import { ScoreCreateWithoutSubjectInput } from './score-create-without-subject.input';

@InputType()
export class ScoreUpsertWithWhereUniqueWithoutSubjectInput {

    @Field(() => ScoreWhereUniqueInput, {nullable:false})
    @Type(() => ScoreWhereUniqueInput)
    where!: ScoreWhereUniqueInput;

    @Field(() => ScoreUpdateWithoutSubjectInput, {nullable:false})
    @Type(() => ScoreUpdateWithoutSubjectInput)
    update!: ScoreUpdateWithoutSubjectInput;

    @Field(() => ScoreCreateWithoutSubjectInput, {nullable:false})
    @Type(() => ScoreCreateWithoutSubjectInput)
    create!: ScoreCreateWithoutSubjectInput;
}
