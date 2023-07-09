import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { SubjectOrderByWithRelationInput } from '../subject/subject-order-by-with-relation.input';
import { DocOrderByRelationAggregateInput } from '../doc/doc-order-by-relation-aggregate.input';
import { ScoreOrderByRelationAggregateInput } from '../score/score-order-by-relation-aggregate.input';

@InputType()
export class TopicOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    createdAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updateAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    subjectId?: SortOrderInput;

    @Field(() => SubjectOrderByWithRelationInput, {nullable:true})
    subject?: SubjectOrderByWithRelationInput;

    @Field(() => DocOrderByRelationAggregateInput, {nullable:true})
    Doc?: DocOrderByRelationAggregateInput;

    @Field(() => ScoreOrderByRelationAggregateInput, {nullable:true})
    Score?: ScoreOrderByRelationAggregateInput;
}
