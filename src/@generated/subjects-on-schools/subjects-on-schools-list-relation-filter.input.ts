import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectsOnSchoolsWhereInput } from './subjects-on-schools-where.input';

@InputType()
export class SubjectsOnSchoolsListRelationFilter {

    @Field(() => SubjectsOnSchoolsWhereInput, {nullable:true})
    every?: SubjectsOnSchoolsWhereInput;

    @Field(() => SubjectsOnSchoolsWhereInput, {nullable:true})
    some?: SubjectsOnSchoolsWhereInput;

    @Field(() => SubjectsOnSchoolsWhereInput, {nullable:true})
    none?: SubjectsOnSchoolsWhereInput;
}
