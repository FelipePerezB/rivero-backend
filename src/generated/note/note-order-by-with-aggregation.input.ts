import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { NoteCountOrderByAggregateInput } from './note-count-order-by-aggregate.input';
import { NoteAvgOrderByAggregateInput } from './note-avg-order-by-aggregate.input';
import { NoteMaxOrderByAggregateInput } from './note-max-order-by-aggregate.input';
import { NoteMinOrderByAggregateInput } from './note-min-order-by-aggregate.input';
import { NoteSumOrderByAggregateInput } from './note-sum-order-by-aggregate.input';

@InputType()
export class NoteOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    subjectId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    topicId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    subtopicId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    fileId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    createdAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updateAt?: SortOrderInput;

    @Field(() => NoteCountOrderByAggregateInput, {nullable:true})
    _count?: NoteCountOrderByAggregateInput;

    @Field(() => NoteAvgOrderByAggregateInput, {nullable:true})
    _avg?: NoteAvgOrderByAggregateInput;

    @Field(() => NoteMaxOrderByAggregateInput, {nullable:true})
    _max?: NoteMaxOrderByAggregateInput;

    @Field(() => NoteMinOrderByAggregateInput, {nullable:true})
    _min?: NoteMinOrderByAggregateInput;

    @Field(() => NoteSumOrderByAggregateInput, {nullable:true})
    _sum?: NoteSumOrderByAggregateInput;
}
