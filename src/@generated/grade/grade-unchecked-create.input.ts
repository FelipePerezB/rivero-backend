import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserUncheckedCreateNestedManyWithoutGradeInput } from '../user/user-unchecked-create-nested-many-without-grade.input';

@InputType()
export class GradeUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => Int, {nullable:false})
    schoolId!: number;

    @Field(() => UserUncheckedCreateNestedManyWithoutGradeInput, {nullable:true})
    Users?: UserUncheckedCreateNestedManyWithoutGradeInput;
}
