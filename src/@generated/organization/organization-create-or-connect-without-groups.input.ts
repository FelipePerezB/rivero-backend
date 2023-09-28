import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationWhereUniqueInput } from './organization-where-unique.input';
import { Type } from 'class-transformer';
import { OrganizationCreateWithoutGroupsInput } from './organization-create-without-groups.input';

@InputType()
export class OrganizationCreateOrConnectWithoutGroupsInput {

    @Field(() => OrganizationWhereUniqueInput, {nullable:false})
    @Type(() => OrganizationWhereUniqueInput)
    where!: OrganizationWhereUniqueInput;

    @Field(() => OrganizationCreateWithoutGroupsInput, {nullable:false})
    @Type(() => OrganizationCreateWithoutGroupsInput)
    create!: OrganizationCreateWithoutGroupsInput;
}
