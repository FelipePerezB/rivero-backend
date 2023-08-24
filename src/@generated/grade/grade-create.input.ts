import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedManyWithoutGradeInput } from '../user/user-create-nested-many-without-grade.input';
import { SchoolCreateNestedOneWithoutGradesInput } from '../school/school-create-nested-one-without-grades.input';

@InputType()
export class GradeCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => UserCreateNestedManyWithoutGradeInput, {nullable:true})
    Users?: UserCreateNestedManyWithoutGradeInput;

    @Field(() => SchoolCreateNestedOneWithoutGradesInput, {nullable:false})
    School!: SchoolCreateNestedOneWithoutGradesInput;
}
