import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectsOnSchoolsCreateNestedManyWithoutSchoolInput } from '../subjects-on-schools/subjects-on-schools-create-nested-many-without-school.input';
import { GradesOnSchoolsCreateNestedManyWithoutSchoolInput } from '../grades-on-schools/grades-on-schools-create-nested-many-without-school.input';

@InputType()
export class SchoolCreateWithoutUsersInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => SubjectsOnSchoolsCreateNestedManyWithoutSchoolInput, {nullable:true})
    subjects?: SubjectsOnSchoolsCreateNestedManyWithoutSchoolInput;

    @Field(() => GradesOnSchoolsCreateNestedManyWithoutSchoolInput, {nullable:true})
    grades?: GradesOnSchoolsCreateNestedManyWithoutSchoolInput;
}
