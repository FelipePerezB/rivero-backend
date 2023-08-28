import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { SchoolCreateNestedOneWithoutUsersInput } from '../school/school-create-nested-one-without-users.input';
import { ScoreCreateNestedManyWithoutUserInput } from '../score/score-create-nested-many-without-user.input';
import { DocCreateNestedManyWithoutAuthorInput } from '../doc/doc-create-nested-many-without-author.input';

@InputType()
export class UserCreateWithoutGradeInput {

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

    @Field(() => SchoolCreateNestedOneWithoutUsersInput, {nullable:false})
    School!: SchoolCreateNestedOneWithoutUsersInput;

    @Field(() => ScoreCreateNestedManyWithoutUserInput, {nullable:true})
    Score?: ScoreCreateNestedManyWithoutUserInput;

    @Field(() => DocCreateNestedManyWithoutAuthorInput, {nullable:true})
    Doc?: DocCreateNestedManyWithoutAuthorInput;
}
