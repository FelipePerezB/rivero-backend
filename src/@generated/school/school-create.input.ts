import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedManyWithoutSchoolInput } from '../user/user-create-nested-many-without-school.input';
import { SubjectsOnSchoolsCreateNestedManyWithoutSchoolInput } from '../subjects-on-schools/subjects-on-schools-create-nested-many-without-school.input';
import { GradesOnSchoolsCreateNestedManyWithoutSchoolInput } from '../grades-on-schools/grades-on-schools-create-nested-many-without-school.input';

@InputType()
export class SchoolCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => UserCreateNestedManyWithoutSchoolInput, {nullable:true})
    users?: UserCreateNestedManyWithoutSchoolInput;

    @Field(() => SubjectsOnSchoolsCreateNestedManyWithoutSchoolInput, {nullable:true})
    subjects?: SubjectsOnSchoolsCreateNestedManyWithoutSchoolInput;

    @Field(() => GradesOnSchoolsCreateNestedManyWithoutSchoolInput, {nullable:true})
    grades?: GradesOnSchoolsCreateNestedManyWithoutSchoolInput;
}