import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { GradesOnDocsCountOrderByAggregateInput } from './grades-on-docs-count-order-by-aggregate.input';
import { GradesOnDocsAvgOrderByAggregateInput } from './grades-on-docs-avg-order-by-aggregate.input';
import { GradesOnDocsMaxOrderByAggregateInput } from './grades-on-docs-max-order-by-aggregate.input';
import { GradesOnDocsMinOrderByAggregateInput } from './grades-on-docs-min-order-by-aggregate.input';
import { GradesOnDocsSumOrderByAggregateInput } from './grades-on-docs-sum-order-by-aggregate.input';

@InputType()
export class GradesOnDocsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    docId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    gradeId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    createdAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updateAt?: SortOrderInput;

    @Field(() => GradesOnDocsCountOrderByAggregateInput, {nullable:true})
    _count?: GradesOnDocsCountOrderByAggregateInput;

    @Field(() => GradesOnDocsAvgOrderByAggregateInput, {nullable:true})
    _avg?: GradesOnDocsAvgOrderByAggregateInput;

    @Field(() => GradesOnDocsMaxOrderByAggregateInput, {nullable:true})
    _max?: GradesOnDocsMaxOrderByAggregateInput;

    @Field(() => GradesOnDocsMinOrderByAggregateInput, {nullable:true})
    _min?: GradesOnDocsMinOrderByAggregateInput;

    @Field(() => GradesOnDocsSumOrderByAggregateInput, {nullable:true})
    _sum?: GradesOnDocsSumOrderByAggregateInput;
}
