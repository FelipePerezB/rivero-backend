import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScoreWhereInput } from './score-where.input';
import { Type } from 'class-transformer';
import { ScoreOrderByWithAggregationInput } from './score-order-by-with-aggregation.input';
import { ScoreScalarFieldEnum } from './score-scalar-field.enum';
import { ScoreScalarWhereWithAggregatesInput } from './score-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ScoreCountAggregateInput } from './score-count-aggregate.input';
import { ScoreAvgAggregateInput } from './score-avg-aggregate.input';
import { ScoreSumAggregateInput } from './score-sum-aggregate.input';
import { ScoreMinAggregateInput } from './score-min-aggregate.input';
import { ScoreMaxAggregateInput } from './score-max-aggregate.input';

@ArgsType()
export class ScoreGroupByArgs {

    @Field(() => ScoreWhereInput, {nullable:true})
    @Type(() => ScoreWhereInput)
    where?: ScoreWhereInput;

    @Field(() => [ScoreOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ScoreOrderByWithAggregationInput>;

    @Field(() => [ScoreScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ScoreScalarFieldEnum>;

    @Field(() => ScoreScalarWhereWithAggregatesInput, {nullable:true})
    having?: ScoreScalarWhereWithAggregatesInput;

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
