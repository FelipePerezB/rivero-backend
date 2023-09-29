import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { SubtopicCountOrderByAggregateInput } from './subtopic-count-order-by-aggregate.input';
import { SubtopicAvgOrderByAggregateInput } from './subtopic-avg-order-by-aggregate.input';
import { SubtopicMaxOrderByAggregateInput } from './subtopic-max-order-by-aggregate.input';
import { SubtopicMinOrderByAggregateInput } from './subtopic-min-order-by-aggregate.input';
import { SubtopicSumOrderByAggregateInput } from './subtopic-sum-order-by-aggregate.input';

@InputType()
export class SubtopicOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    subjectId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    topicId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    createdAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updateAt?: SortOrderInput;

    @Field(() => SubtopicCountOrderByAggregateInput, {nullable:true})
    _count?: SubtopicCountOrderByAggregateInput;

    @Field(() => SubtopicAvgOrderByAggregateInput, {nullable:true})
    _avg?: SubtopicAvgOrderByAggregateInput;

    @Field(() => SubtopicMaxOrderByAggregateInput, {nullable:true})
    _max?: SubtopicMaxOrderByAggregateInput;

    @Field(() => SubtopicMinOrderByAggregateInput, {nullable:true})
    _min?: SubtopicMinOrderByAggregateInput;

    @Field(() => SubtopicSumOrderByAggregateInput, {nullable:true})
    _sum?: SubtopicSumOrderByAggregateInput;
}
