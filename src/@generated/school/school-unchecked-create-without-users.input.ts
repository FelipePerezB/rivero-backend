import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GradeUncheckedCreateNestedManyWithoutSchoolInput } from '../grade/grade-unchecked-create-nested-many-without-school.input';

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

    @Field(() => GradeUncheckedCreateNestedManyWithoutSchoolInput, {nullable:true})
    Grades?: GradeUncheckedCreateNestedManyWithoutSchoolInput;
}
