import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutOrganizationInput } from './user-update-without-organization.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutOrganizationInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutOrganizationInput, {nullable:false})
    @Type(() => UserUpdateWithoutOrganizationInput)
    data!: UserUpdateWithoutOrganizationInput;
}
