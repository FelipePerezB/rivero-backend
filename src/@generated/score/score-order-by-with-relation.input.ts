import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { SubjectOrderByWithRelationInput } from '../subject/subject-order-by-with-relation.input';
import { TopicOrderByWithRelationInput } from '../topic/topic-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { DocOrderByWithRelationInput } from '../doc/doc-order-by-with-relation.input';

@InputType()
export class ScoreOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    score?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    subjectId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    topicId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    correct?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    total?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    wrong?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    null?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    docId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    alternatives?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    createdAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updateAt?: SortOrderInput;

    @Field(() => SubjectOrderByWithRelationInput, {nullable:true})
    subject?: SubjectOrderByWithRelationInput;

    @Field(() => TopicOrderByWithRelationInput, {nullable:true})
    topic?: TopicOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => DocOrderByWithRelationInput, {nullable:true})
    document?: DocOrderByWithRelationInput;
}
