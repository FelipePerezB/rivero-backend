import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByRelationAggregateInput } from '../user/user-order-by-relation-aggregate.input';
import { SubjectsOnSchoolsOrderByRelationAggregateInput } from '../subjects-on-schools/subjects-on-schools-order-by-relation-aggregate.input';
import { GradesOnSchoolsOrderByRelationAggregateInput } from '../grades-on-schools/grades-on-schools-order-by-relation-aggregate.input';

@InputType()
export class SchoolOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    createdAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updateAt?: SortOrderInput;

    @Field(() => UserOrderByRelationAggregateInput, {nullable:true})
    users?: UserOrderByRelationAggregateInput;

    @Field(() => SubjectsOnSchoolsOrderByRelationAggregateInput, {nullable:true})
    subjects?: SubjectsOnSchoolsOrderByRelationAggregateInput;

    @Field(() => GradesOnSchoolsOrderByRelationAggregateInput, {nullable:true})
    grades?: GradesOnSchoolsOrderByRelationAggregateInput;
}