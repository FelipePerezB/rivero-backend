import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { SubjectOrderByWithRelationInput } from '../subject/subject-order-by-with-relation.input';
import { TopicOrderByWithRelationInput } from '../topic/topic-order-by-with-relation.input';
import { GradesOnDocsOrderByRelationAggregateInput } from '../grades-on-docs/grades-on-docs-order-by-relation-aggregate.input';
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

    @Field(() => SortOrderInput, {nullable:true})
    createdAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updateAt?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    subjectId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    topicId?: keyof typeof SortOrder;

    @Field(() => SubjectOrderByWithRelationInput, {nullable:true})
    subject?: SubjectOrderByWithRelationInput;

    @Field(() => TopicOrderByWithRelationInput, {nullable:true})
    topic?: TopicOrderByWithRelationInput;

    @Field(() => GradesOnDocsOrderByRelationAggregateInput, {nullable:true})
    grades?: GradesOnDocsOrderByRelationAggregateInput;

    @Field(() => ScoreOrderByRelationAggregateInput, {nullable:true})
    Score?: ScoreOrderByRelationAggregateInput;
}
