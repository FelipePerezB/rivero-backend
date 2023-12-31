import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { FileCountOrderByAggregateInput } from './file-count-order-by-aggregate.input';
import { FileAvgOrderByAggregateInput } from './file-avg-order-by-aggregate.input';
import { FileMaxOrderByAggregateInput } from './file-max-order-by-aggregate.input';
import { FileMinOrderByAggregateInput } from './file-min-order-by-aggregate.input';
import { FileSumOrderByAggregateInput } from './file-sum-order-by-aggregate.input';

@InputType()
export class FileOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    externalId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    privacity?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    noteId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    createdAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updateAt?: SortOrderInput;

    @Field(() => FileCountOrderByAggregateInput, {nullable:true})
    _count?: FileCountOrderByAggregateInput;

    @Field(() => FileAvgOrderByAggregateInput, {nullable:true})
    _avg?: FileAvgOrderByAggregateInput;

    @Field(() => FileMaxOrderByAggregateInput, {nullable:true})
    _max?: FileMaxOrderByAggregateInput;

    @Field(() => FileMinOrderByAggregateInput, {nullable:true})
    _min?: FileMinOrderByAggregateInput;

    @Field(() => FileSumOrderByAggregateInput, {nullable:true})
    _sum?: FileSumOrderByAggregateInput;
}
