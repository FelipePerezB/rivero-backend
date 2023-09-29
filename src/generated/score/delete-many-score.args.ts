import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScoreWhereInput } from './score-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyScoreArgs {

    @Field(() => ScoreWhereInput, {nullable:true})
    @Type(() => ScoreWhereInput)
    where?: ScoreWhereInput;
}
