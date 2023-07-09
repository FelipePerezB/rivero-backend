import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SubjectsOnSchoolsUncheckedCreateNestedManyWithoutSchoolInput } from '../subjects-on-schools/subjects-on-schools-unchecked-create-nested-many-without-school.input';
import { GradesOnSchoolsUncheckedCreateNestedManyWithoutSchoolInput } from '../grades-on-schools/grades-on-schools-unchecked-create-nested-many-without-school.input';

@InputType()
export class SchoolUncheckedCreateWithoutUsersInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => SubjectsOnSchoolsUncheckedCreateNestedManyWithoutSchoolInput, {nullable:true})
    subjects?: SubjectsOnSchoolsUncheckedCreateNestedManyWithoutSchoolInput;

    @Field(() => GradesOnSchoolsUncheckedCreateNestedManyWithoutSchoolInput, {nullable:true})
    grades?: GradesOnSchoolsUncheckedCreateNestedManyWithoutSchoolInput;
}
