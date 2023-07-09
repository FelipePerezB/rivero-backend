import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DocOrderByWithRelationInput } from '../doc/doc-order-by-with-relation.input';
import { GradeOrderByWithRelationInput } from '../grade/grade-order-by-with-relation.input';

@InputType()
export class GradesOnDocsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    docId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    gradeId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    createdAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updateAt?: SortOrderInput;

    @Field(() => DocOrderByWithRelationInput, {nullable:true})
    doc?: DocOrderByWithRelationInput;

    @Field(() => GradeOrderByWithRelationInput, {nullable:true})
    grade?: GradeOrderByWithRelationInput;
}
