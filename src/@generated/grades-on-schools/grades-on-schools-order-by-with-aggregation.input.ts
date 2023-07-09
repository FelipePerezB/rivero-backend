import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { GradesOnSchoolsCountOrderByAggregateInput } from './grades-on-schools-count-order-by-aggregate.input';
import { GradesOnSchoolsAvgOrderByAggregateInput } from './grades-on-schools-avg-order-by-aggregate.input';
import { GradesOnSchoolsMaxOrderByAggregateInput } from './grades-on-schools-max-order-by-aggregate.input';
import { GradesOnSchoolsMinOrderByAggregateInput } from './grades-on-schools-min-order-by-aggregate.input';
import { GradesOnSchoolsSumOrderByAggregateInput } from './grades-on-schools-sum-order-by-aggregate.input';

@InputType()
export class GradesOnSchoolsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    gradeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    schoolId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    createdAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updateAt?: SortOrderInput;

    @Field(() => GradesOnSchoolsCountOrderByAggregateInput, {nullable:true})
    _count?: GradesOnSchoolsCountOrderByAggregateInput;

    @Field(() => GradesOnSchoolsAvgOrderByAggregateInput, {nullable:true})
    _avg?: GradesOnSchoolsAvgOrderByAggregateInput;

    @Field(() => GradesOnSchoolsMaxOrderByAggregateInput, {nullable:true})
    _max?: GradesOnSchoolsMaxOrderByAggregateInput;

    @Field(() => GradesOnSchoolsMinOrderByAggregateInput, {nullable:true})
    _min?: GradesOnSchoolsMinOrderByAggregateInput;

    @Field(() => GradesOnSchoolsSumOrderByAggregateInput, {nullable:true})
    _sum?: GradesOnSchoolsSumOrderByAggregateInput;
}
