import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { SubjectOrderByWithRelationInput } from '../subject/subject-order-by-with-relation.input';
import { TopicOrderByWithRelationInput } from '../topic/topic-order-by-with-relation.input';
import { NoteOrderByRelationAggregateInput } from '../note/note-order-by-relation-aggregate.input';

@InputType()
export class SubtopicOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    subjectId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    topicId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    createdAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updateAt?: SortOrderInput;

    @Field(() => SubjectOrderByWithRelationInput, {nullable:true})
    Subject?: SubjectOrderByWithRelationInput;

    @Field(() => TopicOrderByWithRelationInput, {nullable:true})
    Topic?: TopicOrderByWithRelationInput;

    @Field(() => NoteOrderByRelationAggregateInput, {nullable:true})
    Notes?: NoteOrderByRelationAggregateInput;
}
