import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScoreUpdateManyMutationInput } from './score-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ScoreWhereInput } from './score-where.input';

@ArgsType()
export class UpdateManyScoreArgs {

    @Field(() => ScoreUpdateManyMutationInput, {nullable:false})
    @Type(() => ScoreUpdateManyMutationInput)
    data!: ScoreUpdateManyMutationInput;

    @Field(() => ScoreWhereInput, {nullable:true})
    @Type(() => ScoreWhereInput)
    where?: ScoreWhereInput;
}
