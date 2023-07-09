import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { GradeOrderByWithRelationInput } from '../grade/grade-order-by-with-relation.input';
import { SchoolOrderByWithRelationInput } from '../school/school-order-by-with-relation.input';
import { ScoreOrderByRelationAggregateInput } from '../score/score-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastname?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    stars?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    nickname?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    createdAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updateAt?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    gradeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    schoolId?: keyof typeof SortOrder;

    @Field(() => GradeOrderByWithRelationInput, {nullable:true})
    grade?: GradeOrderByWithRelationInput;

    @Field(() => SchoolOrderByWithRelationInput, {nullable:true})
    school?: SchoolOrderByWithRelationInput;

    @Field(() => ScoreOrderByRelationAggregateInput, {nullable:true})
    Score?: ScoreOrderByRelationAggregateInput;
}
