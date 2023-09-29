import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationCreateWithoutUsersInput } from './organization-create-without-users.input';
import { Type } from 'class-transformer';
import { OrganizationCreateOrConnectWithoutUsersInput } from './organization-create-or-connect-without-users.input';
import { OrganizationUpsertWithoutUsersInput } from './organization-upsert-without-users.input';
import { OrganizationWhereUniqueInput } from './organization-where-unique.input';
import { OrganizationUpdateToOneWithWhereWithoutUsersInput } from './organization-update-to-one-with-where-without-users.input';

@InputType()
export class OrganizationUpdateOneRequiredWithoutUsersNestedInput {

    @Field(() => OrganizationCreateWithoutUsersInput, {nullable:true})
    @Type(() => OrganizationCreateWithoutUsersInput)
    create?: OrganizationCreateWithoutUsersInput;

    @Field(() => OrganizationCreateOrConnectWithoutUsersInput, {nullable:true})
    @Type(() => OrganizationCreateOrConnectWithoutUsersInput)
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput;

    @Field(() => OrganizationUpsertWithoutUsersInput, {nullable:true})
    @Type(() => OrganizationUpsertWithoutUsersInput)
    upsert?: OrganizationUpsertWithoutUsersInput;

    @Field(() => OrganizationWhereUniqueInput, {nullable:true})
    @Type(() => OrganizationWhereUniqueInput)
    connect?: OrganizationWhereUniqueInput;

    @Field(() => OrganizationUpdateToOneWithWhereWithoutUsersInput, {nullable:true})
    @Type(() => OrganizationUpdateToOneWithWhereWithoutUsersInput)
    update?: OrganizationUpdateToOneWithWhereWithoutUsersInput;
}
