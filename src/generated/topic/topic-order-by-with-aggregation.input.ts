import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { TopicCountOrderByAggregateInput } from './topic-count-order-by-aggregate.input';
import { TopicAvgOrderByAggregateInput } from './topic-avg-order-by-aggregate.input';
import { TopicMaxOrderByAggregateInput } from './topic-max-order-by-aggregate.input';
import { TopicMinOrderByAggregateInput } from './topic-min-order-by-aggregate.input';
import { TopicSumOrderByAggregateInput } from './topic-sum-order-by-aggregate.input';

@InputType()
export class TopicOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    subjectId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    createdAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updateAt?: SortOrderInput;

    @Field(() => TopicCountOrderByAggregateInput, {nullable:true})
    _count?: TopicCountOrderByAggregateInput;

    @Field(() => TopicAvgOrderByAggregateInput, {nullable:true})
    _avg?: TopicAvgOrderByAggregateInput;

    @Field(() => TopicMaxOrderByAggregateInput, {nullable:true})
    _max?: TopicMaxOrderByAggregateInput;

    @Field(() => TopicMinOrderByAggregateInput, {nullable:true})
    _min?: TopicMinOrderByAggregateInput;

    @Field(() => TopicSumOrderByAggregateInput, {nullable:true})
    _sum?: TopicSumOrderByAggregateInput;
}
