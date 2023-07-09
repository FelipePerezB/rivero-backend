import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DocCountOrderByAggregateInput } from './doc-count-order-by-aggregate.input';
import { DocAvgOrderByAggregateInput } from './doc-avg-order-by-aggregate.input';
import { DocMaxOrderByAggregateInput } from './doc-max-order-by-aggregate.input';
import { DocMinOrderByAggregateInput } from './doc-min-order-by-aggregate.input';
import { DocSumOrderByAggregateInput } from './doc-sum-order-by-aggregate.input';

@InputType()
export class DocOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    createdAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updateAt?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    subjectId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    topicId?: keyof typeof SortOrder;

    @Field(() => DocCountOrderByAggregateInput, {nullable:true})
    _count?: DocCountOrderByAggregateInput;

    @Field(() => DocAvgOrderByAggregateInput, {nullable:true})
    _avg?: DocAvgOrderByAggregateInput;

    @Field(() => DocMaxOrderByAggregateInput, {nullable:true})
    _max?: DocMaxOrderByAggregateInput;

    @Field(() => DocMinOrderByAggregateInput, {nullable:true})
    _min?: DocMinOrderByAggregateInput;

    @Field(() => DocSumOrderByAggregateInput, {nullable:true})
    _sum?: DocSumOrderByAggregateInput;
}
