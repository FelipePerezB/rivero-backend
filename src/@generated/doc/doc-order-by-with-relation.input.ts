import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { TopicOrderByWithRelationInput } from '../topic/topic-order-by-with-relation.input';
import { GradesOnDocsOrderByRelationAggregateInput } from '../grades-on-docs/grades-on-docs-order-by-relation-aggregate.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { ScoreOrderByRelationAggregateInput } from '../score/score-order-by-relation-aggregate.input';

@InputType()
export class DocOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    topicId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    createdAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updateAt?: SortOrderInput;

    @Field(() => TopicOrderByWithRelationInput, {nullable:true})
    topic?: TopicOrderByWithRelationInput;

    @Field(() => GradesOnDocsOrderByRelationAggregateInput, {nullable:true})
    grades?: GradesOnDocsOrderByRelationAggregateInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    author?: UserOrderByWithRelationInput;

    @Field(() => ScoreOrderByRelationAggregateInput, {nullable:true})
    Score?: ScoreOrderByRelationAggregateInput;
}
