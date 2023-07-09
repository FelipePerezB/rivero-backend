import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScoreWhereInput } from './score-where.input';
import { Type } from 'class-transformer';
import { ScoreOrderByWithRelationInput } from './score-order-by-with-relation.input';
import { ScoreWhereUniqueInput } from './score-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ScoreCountAggregateInput } from './score-count-aggregate.input';
import { ScoreAvgAggregateInput } from './score-avg-aggregate.input';
import { ScoreSumAggregateInput } from './score-sum-aggregate.input';
import { ScoreMinAggregateInput } from './score-min-aggregate.input';
import { ScoreMaxAggregateInput } from './score-max-aggregate.input';

@ArgsType()
export class ScoreAggregateArgs {

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

    @Field(() => ScoreCountAggregateInput, {nullable:true})
    _count?: ScoreCountAggregateInput;

    @Field(() => ScoreAvgAggregateInput, {nullable:true})
    _avg?: ScoreAvgAggregateInput;

    @Field(() => ScoreSumAggregateInput, {nullable:true})
    _sum?: ScoreSumAggregateInput;

    @Field(() => ScoreMinAggregateInput, {nullable:true})
    _min?: ScoreMinAggregateInput;

    @Field(() => ScoreMaxAggregateInput, {nullable:true})
    _max?: ScoreMaxAggregateInput;
}
