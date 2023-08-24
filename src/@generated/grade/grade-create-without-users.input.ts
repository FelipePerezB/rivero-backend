import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchoolCreateNestedOneWithoutGradesInput } from '../school/school-create-nested-one-without-grades.input';

@InputType()
export class GradeCreateWithoutUsersInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => SchoolCreateNestedOneWithoutGradesInput, {nullable:false})
    School!: SchoolCreateNestedOneWithoutGradesInput;
}
