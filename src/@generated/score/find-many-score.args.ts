import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScoreWhereInput } from './score-where.input';
import { Type } from 'class-transformer';
import { ScoreOrderByWithRelationInput } from './score-order-by-with-relation.input';
import { ScoreWhereUniqueInput } from './score-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ScoreScalarFieldEnum } from './score-scalar-field.enum';

@ArgsType()
export class FindManyScoreArgs {

    @Field(() => ScoreWhereInput, {nullable:true})
    @Type(() => ScoreWhereInput)
    where?: ScoreWhereInput;

    @Field(() => [ScoreOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ScoreOrderByWithRelationInput>;

    @Field(() => ScoreWhereUniqueInput, {nullable:true})
    cursor?: ScoreWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ScoreScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ScoreScalarFieldEnum>;
}
