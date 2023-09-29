import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScoreWhereInput } from './score-where.input';

@InputType()
export class ScoreListRelationFilter {

    @Field(() => ScoreWhereInput, {nullable:true})
    every?: ScoreWhereInput;

    @Field(() => ScoreWhereInput, {nullable:true})
    some?: ScoreWhereInput;

    @Field(() => ScoreWhereInput, {nullable:true})
    none?: ScoreWhereInput;
}
