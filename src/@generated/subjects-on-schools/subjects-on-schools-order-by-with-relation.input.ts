import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { SubjectOrderByWithRelationInput } from '../subject/subject-order-by-with-relation.input';
import { SchoolOrderByWithRelationInput } from '../school/school-order-by-with-relation.input';

@InputType()
export class SubjectsOnSchoolsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    subjectId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    schoolId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    createdAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updateAt?: SortOrderInput;

    @Field(() => SubjectOrderByWithRelationInput, {nullable:true})
    Subject?: SubjectOrderByWithRelationInput;

    @Field(() => SchoolOrderByWithRelationInput, {nullable:true})
    School?: SchoolOrderByWithRelationInput;
}
