import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchoolCreateNestedOneWithoutSubjectsInput } from '../school/school-create-nested-one-without-subjects.input';

@InputType()
export class SubjectsOnSchoolsCreateWithoutSubjectInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => SchoolCreateNestedOneWithoutSubjectsInput, {nullable:true})
    School?: SchoolCreateNestedOneWithoutSubjectsInput;
}
