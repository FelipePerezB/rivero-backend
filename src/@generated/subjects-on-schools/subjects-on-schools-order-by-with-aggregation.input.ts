import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { SubjectsOnSchoolsCountOrderByAggregateInput } from './subjects-on-schools-count-order-by-aggregate.input';
import { SubjectsOnSchoolsAvgOrderByAggregateInput } from './subjects-on-schools-avg-order-by-aggregate.input';
import { SubjectsOnSchoolsMaxOrderByAggregateInput } from './subjects-on-schools-max-order-by-aggregate.input';
import { SubjectsOnSchoolsMinOrderByAggregateInput } from './subjects-on-schools-min-order-by-aggregate.input';
import { SubjectsOnSchoolsSumOrderByAggregateInput } from './subjects-on-schools-sum-order-by-aggregate.input';

@InputType()
export class SubjectsOnSchoolsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    subjectId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    schoolId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    createdAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updateAt?: SortOrderInput;

    @Field(() => SubjectsOnSchoolsCountOrderByAggregateInput, {nullable:true})
    _count?: SubjectsOnSchoolsCountOrderByAggregateInput;

    @Field(() => SubjectsOnSchoolsAvgOrderByAggregateInput, {nullable:true})
    _avg?: SubjectsOnSchoolsAvgOrderByAggregateInput;

    @Field(() => SubjectsOnSchoolsMaxOrderByAggregateInput, {nullable:true})
    _max?: SubjectsOnSchoolsMaxOrderByAggregateInput;

    @Field(() => SubjectsOnSchoolsMinOrderByAggregateInput, {nullable:true})
    _min?: SubjectsOnSchoolsMinOrderByAggregateInput;

    @Field(() => SubjectsOnSchoolsSumOrderByAggregateInput, {nullable:true})
    _sum?: SubjectsOnSchoolsSumOrderByAggregateInput;
}
