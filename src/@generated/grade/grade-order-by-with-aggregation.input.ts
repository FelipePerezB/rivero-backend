import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { GradeCountOrderByAggregateInput } from './grade-count-order-by-aggregate.input';
import { GradeAvgOrderByAggregateInput } from './grade-avg-order-by-aggregate.input';
import { GradeMaxOrderByAggregateInput } from './grade-max-order-by-aggregate.input';
import { GradeMinOrderByAggregateInput } from './grade-min-order-by-aggregate.input';
import { GradeSumOrderByAggregateInput } from './grade-sum-order-by-aggregate.input';

@InputType()
export class GradeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    grade?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    createdAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updateAt?: SortOrderInput;

    @Field(() => GradeCountOrderByAggregateInput, {nullable:true})
    _count?: GradeCountOrderByAggregateInput;

    @Field(() => GradeAvgOrderByAggregateInput, {nullable:true})
    _avg?: GradeAvgOrderByAggregateInput;

    @Field(() => GradeMaxOrderByAggregateInput, {nullable:true})
    _max?: GradeMaxOrderByAggregateInput;

    @Field(() => GradeMinOrderByAggregateInput, {nullable:true})
    _min?: GradeMinOrderByAggregateInput;

    @Field(() => GradeSumOrderByAggregateInput, {nullable:true})
    _sum?: GradeSumOrderByAggregateInput;
}
