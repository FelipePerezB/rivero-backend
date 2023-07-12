import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ScoreCountOrderByAggregateInput } from './score-count-order-by-aggregate.input';
import { ScoreAvgOrderByAggregateInput } from './score-avg-order-by-aggregate.input';
import { ScoreMaxOrderByAggregateInput } from './score-max-order-by-aggregate.input';
import { ScoreMinOrderByAggregateInput } from './score-min-order-by-aggregate.input';
import { ScoreSumOrderByAggregateInput } from './score-sum-order-by-aggregate.input';

@InputType()
export class ScoreOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    score?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    alternatives?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    docId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    createdAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updateAt?: SortOrderInput;

    @Field(() => ScoreCountOrderByAggregateInput, {nullable:true})
    _count?: ScoreCountOrderByAggregateInput;

    @Field(() => ScoreAvgOrderByAggregateInput, {nullable:true})
    _avg?: ScoreAvgOrderByAggregateInput;

    @Field(() => ScoreMaxOrderByAggregateInput, {nullable:true})
    _max?: ScoreMaxOrderByAggregateInput;

    @Field(() => ScoreMinOrderByAggregateInput, {nullable:true})
    _min?: ScoreMinOrderByAggregateInput;

    @Field(() => ScoreSumOrderByAggregateInput, {nullable:true})
    _sum?: ScoreSumOrderByAggregateInput;
}
