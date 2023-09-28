import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupWhereUniqueInput } from './group-where-unique.input';
import { Type } from 'class-transformer';
import { GroupCreateWithoutOrganizationInput } from './group-create-without-organization.input';

@InputType()
export class GroupCreateOrConnectWithoutOrganizationInput {

    @Field(() => GroupWhereUniqueInput, {nullable:false})
    @Type(() => GroupWhereUniqueInput)
    where!: GroupWhereUniqueInput;

    @Field(() => GroupCreateWithoutOrganizationInput, {nullable:false})
    @Type(() => GroupCreateWithoutOrganizationInput)
    create!: GroupCreateWithoutOrganizationInput;
}
