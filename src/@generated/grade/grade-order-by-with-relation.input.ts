import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByRelationAggregateInput } from '../user/user-order-by-relation-aggregate.input';
import { GradesOnDocsOrderByRelationAggregateInput } from '../grades-on-docs/grades-on-docs-order-by-relation-aggregate.input';
import { GradesOnSchoolsOrderByRelationAggregateInput } from '../grades-on-schools/grades-on-schools-order-by-relation-aggregate.input';

@InputType()
export class GradeOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    grade?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    createdAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updateAt?: SortOrderInput;

    @Field(() => UserOrderByRelationAggregateInput, {nullable:true})
    users?: UserOrderByRelationAggregateInput;

    @Field(() => GradesOnDocsOrderByRelationAggregateInput, {nullable:true})
    docs?: GradesOnDocsOrderByRelationAggregateInput;

    @Field(() => GradesOnSchoolsOrderByRelationAggregateInput, {nullable:true})
    schools?: GradesOnSchoolsOrderByRelationAggregateInput;
}
