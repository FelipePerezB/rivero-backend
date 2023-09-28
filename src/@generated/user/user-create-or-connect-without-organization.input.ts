import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutOrganizationInput } from './user-create-without-organization.input';

@InputType()
export class UserCreateOrConnectWithoutOrganizationInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutOrganizationInput, {nullable:false})
    @Type(() => UserCreateWithoutOrganizationInput)
    create!: UserCreateWithoutOrganizationInput;
}
