import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScoreWhereUniqueInput } from './score-where-unique.input';
import { Type } from 'class-transformer';
import { ScoreUpdateWithoutUserInput } from './score-update-without-user.input';
import { ScoreCreateWithoutUserInput } from './score-create-without-user.input';

@InputType()
export class ScoreUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => ScoreWhereUniqueInput, {nullable:false})
    @Type(() => ScoreWhereUniqueInput)
    where!: ScoreWhereUniqueInput;

    @Field(() => ScoreUpdateWithoutUserInput, {nullable:false})
    @Type(() => ScoreUpdateWithoutUserInput)
    update!: ScoreUpdateWithoutUserInput;

    @Field(() => ScoreCreateWithoutUserInput, {nullable:false})
    @Type(() => ScoreCreateWithoutUserInput)
    create!: ScoreCreateWithoutUserInput;
}
