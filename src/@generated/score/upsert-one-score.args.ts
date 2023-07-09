import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScoreWhereUniqueInput } from './score-where-unique.input';
import { Type } from 'class-transformer';
import { ScoreCreateInput } from './score-create.input';
import { ScoreUpdateInput } from './score-update.input';

@ArgsType()
export class UpsertOneScoreArgs {

    @Field(() => ScoreWhereUniqueInput, {nullable:false})
    @Type(() => ScoreWhereUniqueInput)
    where!: ScoreWhereUniqueInput;

    @Field(() => ScoreCreateInput, {nullable:false})
    @Type(() => ScoreCreateInput)
    create!: ScoreCreateInput;

    @Field(() => ScoreUpdateInput, {nullable:false})
    @Type(() => ScoreUpdateInput)
    update!: ScoreUpdateInput;
}
