import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradeCreateNestedManyWithoutSchoolInput } from '../grade/grade-create-nested-many-without-school.input';

@InputType()
export class SchoolCreateWithoutUsersInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => GradeCreateNestedManyWithoutSchoolInput, {nullable:true})
    Grades?: GradeCreateNestedManyWithoutSchoolInput;
}
