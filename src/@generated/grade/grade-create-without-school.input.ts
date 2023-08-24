import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedManyWithoutGradeInput } from '../user/user-create-nested-many-without-grade.input';

@InputType()
export class GradeCreateWithoutSchoolInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => UserCreateNestedManyWithoutGradeInput, {nullable:true})
    Users?: UserCreateNestedManyWithoutGradeInput;
}
