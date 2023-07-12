import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectsOnSchoolsCreateNestedManyWithoutSubjectInput } from '../subjects-on-schools/subjects-on-schools-create-nested-many-without-subject.input';

@InputType()
export class SubjectCreateWithoutTopicsInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    color!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => SubjectsOnSchoolsCreateNestedManyWithoutSubjectInput, {nullable:true})
    schools?: SubjectsOnSchoolsCreateNestedManyWithoutSubjectInput;
}
