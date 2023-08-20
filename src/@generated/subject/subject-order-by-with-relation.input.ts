import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { TopicOrderByRelationAggregateInput } from '../topic/topic-order-by-relation-aggregate.input';
import { SubtopicOrderByRelationAggregateInput } from '../subtopic/subtopic-order-by-relation-aggregate.input';
import { DocOrderByRelationAggregateInput } from '../doc/doc-order-by-relation-aggregate.input';

@InputType()
export class SubjectOrderByWithRelationInput {

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

    @Field(() => TopicOrderByRelationAggregateInput, {nullable:true})
    Topics?: TopicOrderByRelationAggregateInput;

    @Field(() => SubtopicOrderByRelationAggregateInput, {nullable:true})
    Subtopic?: SubtopicOrderByRelationAggregateInput;

    @Field(() => DocOrderByRelationAggregateInput, {nullable:true})
    Docs?: DocOrderByRelationAggregateInput;
}
