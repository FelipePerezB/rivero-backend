import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubjectWhereInput } from './subject-where.input';
import { Type } from 'class-transformer';
import { SubjectOrderByWithRelationInput } from './subject-order-by-with-relation.input';
import { SubjectWhereUniqueInput } from './subject-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SubjectScalarFieldEnum } from './subject-scalar-field.enum';

@ArgsType()
export class FindFirstSubjectArgs {

    @Field(() => SubjectWhereInput, {nullable:true})
    @Type(() => SubjectWhereInput)
    where?: SubjectWhereInput;

    @Field(() => [SubjectOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SubjectOrderByWithRelationInput>;

    @Field(() => SubjectWhereUniqueInput, {nullable:true})
    cursor?: SubjectWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SubjectScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SubjectScalarFieldEnum>;
}
