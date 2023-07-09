import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SchoolCreateNestedOneWithoutUsersInput } from '../school/school-create-nested-one-without-users.input';
import { ScoreCreateNestedManyWithoutUserInput } from '../score/score-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutGradeInput {

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    lastname!: string;

    @Field(() => Int, {nullable:false})
    stars!: number;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:false})
    role!: string;

    @Field(() => String, {nullable:false})
    nickname!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => SchoolCreateNestedOneWithoutUsersInput, {nullable:false})
    school!: SchoolCreateNestedOneWithoutUsersInput;

    @Field(() => ScoreCreateNestedManyWithoutUserInput, {nullable:true})
    Score?: ScoreCreateNestedManyWithoutUserInput;
}