import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubjectsOnSchoolsWhereInput } from './subjects-on-schools-where.input';
import { Type } from 'class-transformer';
import { SubjectsOnSchoolsOrderByWithRelationInput } from './subjects-on-schools-order-by-with-relation.input';
import { SubjectsOnSchoolsWhereUniqueInput } from './subjects-on-schools-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SubjectsOnSchoolsScalarFieldEnum } from './subjects-on-schools-scalar-field.enum';

@ArgsType()
export class FindFirstSubjectsOnSchoolsArgs {

    @Field(() => SubjectsOnSchoolsWhereInput, {nullable:true})
    @Type(() => SubjectsOnSchoolsWhereInput)
    where?: SubjectsOnSchoolsWhereInput;

    @Field(() => [SubjectsOnSchoolsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SubjectsOnSchoolsOrderByWithRelationInput>;

    @Field(() => SubjectsOnSchoolsWhereUniqueInput, {nullable:true})
    cursor?: SubjectsOnSchoolsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SubjectsOnSchoolsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SubjectsOnSchoolsScalarFieldEnum>;
}
