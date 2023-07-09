import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradesOnSchoolsWhereInput } from './grades-on-schools-where.input';

@InputType()
export class GradesOnSchoolsListRelationFilter {

    @Field(() => GradesOnSchoolsWhereInput, {nullable:true})
    every?: GradesOnSchoolsWhereInput;

    @Field(() => GradesOnSchoolsWhereInput, {nullable:true})
    some?: GradesOnSchoolsWhereInput;

    @Field(() => GradesOnSchoolsWhereInput, {nullable:true})
    none?: GradesOnSchoolsWhereInput;
}
