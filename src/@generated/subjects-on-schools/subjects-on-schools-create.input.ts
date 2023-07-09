import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectCreateNestedOneWithoutSchoolsInput } from '../subject/subject-create-nested-one-without-schools.input';
import { SchoolCreateNestedOneWithoutSubjectsInput } from '../school/school-create-nested-one-without-subjects.input';

@InputType()
export class SubjectsOnSchoolsCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => SubjectCreateNestedOneWithoutSchoolsInput, {nullable:true})
    Subject?: SubjectCreateNestedOneWithoutSchoolsInput;

    @Field(() => SchoolCreateNestedOneWithoutSubjectsInput, {nullable:true})
    School?: SchoolCreateNestedOneWithoutSubjectsInput;
}
