import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScoreUpdateInput } from './score-update.input';
import { Type } from 'class-transformer';
import { ScoreWhereUniqueInput } from './score-where-unique.input';

@ArgsType()
export class UpdateOneScoreArgs {

    @Field(() => ScoreUpdateInput, {nullable:false})
    @Type(() => ScoreUpdateInput)
    data!: ScoreUpdateInput;

    @Field(() => ScoreWhereUniqueInput, {nullable:false})
    @Type(() => ScoreWhereUniqueInput)
    where!: ScoreWhereUniqueInput;
}
