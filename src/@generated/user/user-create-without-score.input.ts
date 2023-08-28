import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { GradeCreateNestedOneWithoutUsersInput } from '../grade/grade-create-nested-one-without-users.input';
import { SchoolCreateNestedOneWithoutUsersInput } from '../school/school-create-nested-one-without-users.input';
import { DocCreateNestedManyWithoutAuthorInput } from '../doc/doc-create-nested-many-without-author.input';

@InputType()
export class UserCreateWithoutScoreInput {

    @Field(() => String, {nullable:false})
    externalId!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => Role, {nullable:false})
    role!: keyof typeof Role;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => GradeCreateNestedOneWithoutUsersInput, {nullable:false})
    Grade!: GradeCreateNestedOneWithoutUsersInput;

    @Field(() => SchoolCreateNestedOneWithoutUsersInput, {nullable:false})
    School!: SchoolCreateNestedOneWithoutUsersInput;

    @Field(() => DocCreateNestedManyWithoutAuthorInput, {nullable:true})
    Doc?: DocCreateNestedManyWithoutAuthorInput;
}
