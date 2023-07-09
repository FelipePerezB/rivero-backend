import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScoreCreateInput } from './score-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneScoreArgs {

    @Field(() => ScoreCreateInput, {nullable:false})
    @Type(() => ScoreCreateInput)
    data!: ScoreCreateInput;
}
