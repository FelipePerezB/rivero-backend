import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DocOrderByRelationAggregateInput } from '../doc/doc-order-by-relation-aggregate.input';
import { SubjectsOnSchoolsOrderByRelationAggregateInput } from '../subjects-on-schools/subjects-on-schools-order-by-relation-aggregate.input';
import { TopicOrderByRelationAggregateInput } from '../topic/topic-order-by-relation-aggregate.input';
import { ScoreOrderByRelationAggregateInput } from '../score/score-order-by-relation-aggregate.input';

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

    @Field(() => DocOrderByRelationAggregateInput, {nullable:true})
    docs?: DocOrderByRelationAggregateInput;

    @Field(() => SubjectsOnSchoolsOrderByRelationAggregateInput, {nullable:true})
    schools?: SubjectsOnSchoolsOrderByRelationAggregateInput;

    @Field(() => TopicOrderByRelationAggregateInput, {nullable:true})
    topics?: TopicOrderByRelationAggregateInput;

    @Field(() => ScoreOrderByRelationAggregateInput, {nullable:true})
    Score?: ScoreOrderByRelationAggregateInput;
}
