import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { SchoolCountOrderByAggregateInput } from './school-count-order-by-aggregate.input';
import { SchoolAvgOrderByAggregateInput } from './school-avg-order-by-aggregate.input';
import { SchoolMaxOrderByAggregateInput } from './school-max-order-by-aggregate.input';
import { SchoolMinOrderByAggregateInput } from './school-min-order-by-aggregate.input';
import { SchoolSumOrderByAggregateInput } from './school-sum-order-by-aggregate.input';

@InputType()
export class SchoolOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    createdAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updateAt?: SortOrderInput;

    @Field(() => SchoolCountOrderByAggregateInput, {nullable:true})
    _count?: SchoolCountOrderByAggregateInput;

    @Field(() => SchoolAvgOrderByAggregateInput, {nullable:true})
    _avg?: SchoolAvgOrderByAggregateInput;

    @Field(() => SchoolMaxOrderByAggregateInput, {nullable:true})
    _max?: SchoolMaxOrderByAggregateInput;

    @Field(() => SchoolMinOrderByAggregateInput, {nullable:true})
    _min?: SchoolMinOrderByAggregateInput;

    @Field(() => SchoolSumOrderByAggregateInput, {nullable:true})
    _sum?: SchoolSumOrderByAggregateInput;
}
