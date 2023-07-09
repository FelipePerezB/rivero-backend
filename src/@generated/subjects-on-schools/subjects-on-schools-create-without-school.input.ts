import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectCreateNestedOneWithoutSchoolsInput } from '../subject/subject-create-nested-one-without-schools.input';

@InputType()
export class SubjectsOnSchoolsCreateWithoutSchoolInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => SubjectCreateNestedOneWithoutSchoolsInput, {nullable:true})
    Subject?: SubjectCreateNestedOneWithoutSchoolsInput;
}
