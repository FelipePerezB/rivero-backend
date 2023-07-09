import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { SubjectCountOrderByAggregateInput } from './subject-count-order-by-aggregate.input';
import { SubjectAvgOrderByAggregateInput } from './subject-avg-order-by-aggregate.input';
import { SubjectMaxOrderByAggregateInput } from './subject-max-order-by-aggregate.input';
import { SubjectMinOrderByAggregateInput } from './subject-min-order-by-aggregate.input';
import { SubjectSumOrderByAggregateInput } from './subject-sum-order-by-aggregate.input';

@InputType()
export class SubjectOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    color?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    createdAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updateAt?: SortOrderInput;

    @Field(() => SubjectCountOrderByAggregateInput, {nullable:true})
    _count?: SubjectCountOrderByAggregateInput;

    @Field(() => SubjectAvgOrderByAggregateInput, {nullable:true})
    _avg?: SubjectAvgOrderByAggregateInput;

    @Field(() => SubjectMaxOrderByAggregateInput, {nullable:true})
    _max?: SubjectMaxOrderByAggregateInput;

    @Field(() => SubjectMinOrderByAggregateInput, {nullable:true})
    _min?: SubjectMinOrderByAggregateInput;

    @Field(() => SubjectSumOrderByAggregateInput, {nullable:true})
    _sum?: SubjectSumOrderByAggregateInput;
}
