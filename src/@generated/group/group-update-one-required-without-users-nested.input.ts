import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupCreateWithoutUsersInput } from './group-create-without-users.input';
import { Type } from 'class-transformer';
import { GroupCreateOrConnectWithoutUsersInput } from './group-create-or-connect-without-users.input';
import { GroupUpsertWithoutUsersInput } from './group-upsert-without-users.input';
import { GroupWhereUniqueInput } from './group-where-unique.input';
import { GroupUpdateToOneWithWhereWithoutUsersInput } from './group-update-to-one-with-where-without-users.input';

@InputType()
export class GroupUpdateOneRequiredWithoutUsersNestedInput {

    @Field(() => GroupCreateWithoutUsersInput, {nullable:true})
    @Type(() => GroupCreateWithoutUsersInput)
    create?: GroupCreateWithoutUsersInput;

    @Field(() => GroupCreateOrConnectWithoutUsersInput, {nullable:true})
    @Type(() => GroupCreateOrConnectWithoutUsersInput)
    connectOrCreate?: GroupCreateOrConnectWithoutUsersInput;

    @Field(() => GroupUpsertWithoutUsersInput, {nullable:true})
    @Type(() => GroupUpsertWithoutUsersInput)
    upsert?: GroupUpsertWithoutUsersInput;

    @Field(() => GroupWhereUniqueInput, {nullable:true})
    @Type(() => GroupWhereUniqueInput)
    connect?: GroupWhereUniqueInput;

    @Field(() => GroupUpdateToOneWithWhereWithoutUsersInput, {nullable:true})
    @Type(() => GroupUpdateToOneWithWhereWithoutUsersInput)
    update?: GroupUpdateToOneWithWhereWithoutUsersInput;
}
