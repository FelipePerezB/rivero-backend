import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ScoreOrderByRelationAggregateInput } from '../score/score-order-by-relation-aggregate.input';
import { SubjectOrderByWithRelationInput } from '../subject/subject-order-by-with-relation.input';
import { TopicOrderByWithRelationInput } from '../topic/topic-order-by-with-relation.input';
import { SubtopicOrderByWithRelationInput } from '../subtopic/subtopic-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';

@InputType()
export class DocOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    externalId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    privacity?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    subjectId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    topicId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    subtopicId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    createdAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updateAt?: SortOrderInput;

    @Field(() => ScoreOrderByRelationAggregateInput, {nullable:true})
    Score?: ScoreOrderByRelationAggregateInput;

    @Field(() => SubjectOrderByWithRelationInput, {nullable:true})
    Subject?: SubjectOrderByWithRelationInput;

    @Field(() => TopicOrderByWithRelationInput, {nullable:true})
    Topic?: TopicOrderByWithRelationInput;

    @Field(() => SubtopicOrderByWithRelationInput, {nullable:true})
    Subtopic?: SubtopicOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    Author?: UserOrderByWithRelationInput;
}
