import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { GroupCreateNestedOneWithoutUsersInput } from '../group/group-create-nested-one-without-users.input';
import { ScoreCreateNestedManyWithoutUserInput } from '../score/score-create-nested-many-without-user.input';
import { FileCreateNestedManyWithoutAuthorInput } from '../file/file-create-nested-many-without-author.input';

@InputType()
export class UserCreateWithoutOrganizationInput {

    @Field(() => String, {nullable:false})
    externalId!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    lastname!: string;

    @Field(() => Role, {nullable:false})
    role!: keyof typeof Role;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => GroupCreateNestedOneWithoutUsersInput, {nullable:false})
    Group!: GroupCreateNestedOneWithoutUsersInput;

    @Field(() => ScoreCreateNestedManyWithoutUserInput, {nullable:true})
    Score?: ScoreCreateNestedManyWithoutUserInput;

    @Field(() => FileCreateNestedManyWithoutAuthorInput, {nullable:true})
    File?: FileCreateNestedManyWithoutAuthorInput;
}
