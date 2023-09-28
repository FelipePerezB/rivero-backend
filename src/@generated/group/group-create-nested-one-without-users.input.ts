import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupCreateWithoutUsersInput } from './group-create-without-users.input';
import { Type } from 'class-transformer';
import { GroupCreateOrConnectWithoutUsersInput } from './group-create-or-connect-without-users.input';
import { GroupWhereUniqueInput } from './group-where-unique.input';

@InputType()
export class GroupCreateNestedOneWithoutUsersInput {

    @Field(() => GroupCreateWithoutUsersInput, {nullable:true})
    @Type(() => GroupCreateWithoutUsersInput)
    create?: GroupCreateWithoutUsersInput;

    @Field(() => GroupCreateOrConnectWithoutUsersInput, {nullable:true})
    @Type(() => GroupCreateOrConnectWithoutUsersInput)
    connectOrCreate?: GroupCreateOrConnectWithoutUsersInput;

    @Field(() => GroupWhereUniqueInput, {nullable:true})
    @Type(() => GroupWhereUniqueInput)
    connect?: GroupWhereUniqueInput;
}
