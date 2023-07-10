import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GradeCreateNestedOneWithoutUsersInput } from '../grade/grade-create-nested-one-without-users.input';
import { SchoolCreateNestedOneWithoutUsersInput } from '../school/school-create-nested-one-without-users.input';
import { DocCreateNestedManyWithoutAuthorInput } from '../doc/doc-create-nested-many-without-author.input';

@InputType()
export class UserCreateWithoutScoreInput {

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

    @Field(() => GradeCreateNestedOneWithoutUsersInput, {nullable:false})
    grade!: GradeCreateNestedOneWithoutUsersInput;

    @Field(() => SchoolCreateNestedOneWithoutUsersInput, {nullable:false})
    school!: SchoolCreateNestedOneWithoutUsersInput;

    @Field(() => DocCreateNestedManyWithoutAuthorInput, {nullable:true})
    Doc?: DocCreateNestedManyWithoutAuthorInput;
}
