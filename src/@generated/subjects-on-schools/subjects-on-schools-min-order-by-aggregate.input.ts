import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class SubjectsOnSchoolsMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    subjectId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    schoolId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updateAt?: keyof typeof SortOrder;
}
