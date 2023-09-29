import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationWhereUniqueInput } from './organization-where-unique.input';
import { Type } from 'class-transformer';
import { OrganizationCreateWithoutUsersInput } from './organization-create-without-users.input';

@InputType()
export class OrganizationCreateOrConnectWithoutUsersInput {

    @Field(() => OrganizationWhereUniqueInput, {nullable:false})
    @Type(() => OrganizationWhereUniqueInput)
    where!: OrganizationWhereUniqueInput;

    @Field(() => OrganizationCreateWithoutUsersInput, {nullable:false})
    @Type(() => OrganizationCreateWithoutUsersInput)
    create!: OrganizationCreateWithoutUsersInput;
}
