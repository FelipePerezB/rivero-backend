import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { GradeCreateNestedOneWithoutUsersInput } from '../grade/grade-create-nested-one-without-users.input';
import { ScoreCreateNestedManyWithoutUserInput } from '../score/score-create-nested-many-without-user.input';
import { DocCreateNestedManyWithoutAuthorInput } from '../doc/doc-create-nested-many-without-author.input';

@InputType()
export class UserCreateWithoutSchoolInput {

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    lastname!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Role, {nullable:false})
    role!: keyof typeof Role;

    @Field(() => String, {nullable:false})
    nickname!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => GradeCreateNestedOneWithoutUsersInput, {nullable:false})
    Grade!: GradeCreateNestedOneWithoutUsersInput;

    @Field(() => ScoreCreateNestedManyWithoutUserInput, {nullable:true})
    Score?: ScoreCreateNestedManyWithoutUserInput;

    @Field(() => DocCreateNestedManyWithoutAuthorInput, {nullable:true})
    Doc?: DocCreateNestedManyWithoutAuthorInput;
}
