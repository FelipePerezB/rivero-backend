import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserUncheckedCreateNestedManyWithoutSchoolInput } from '../user/user-unchecked-create-nested-many-without-school.input';
import { SubjectsOnSchoolsUncheckedCreateNestedManyWithoutSchoolInput } from '../subjects-on-schools/subjects-on-schools-unchecked-create-nested-many-without-school.input';

@InputType()
export class SchoolUncheckedCreateWithoutGradesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => UserUncheckedCreateNestedManyWithoutSchoolInput, {nullable:true})
    users?: UserUncheckedCreateNestedManyWithoutSchoolInput;

    @Field(() => SubjectsOnSchoolsUncheckedCreateNestedManyWithoutSchoolInput, {nullable:true})
    subjects?: SubjectsOnSchoolsUncheckedCreateNestedManyWithoutSchoolInput;
}
