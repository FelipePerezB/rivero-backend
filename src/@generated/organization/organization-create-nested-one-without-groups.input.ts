import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationCreateWithoutGroupsInput } from './organization-create-without-groups.input';
import { Type } from 'class-transformer';
import { OrganizationCreateOrConnectWithoutGroupsInput } from './organization-create-or-connect-without-groups.input';
import { OrganizationWhereUniqueInput } from './organization-where-unique.input';

@InputType()
export class OrganizationCreateNestedOneWithoutGroupsInput {

    @Field(() => OrganizationCreateWithoutGroupsInput, {nullable:true})
    @Type(() => OrganizationCreateWithoutGroupsInput)
    create?: OrganizationCreateWithoutGroupsInput;

    @Field(() => OrganizationCreateOrConnectWithoutGroupsInput, {nullable:true})
    @Type(() => OrganizationCreateOrConnectWithoutGroupsInput)
    connectOrCreate?: OrganizationCreateOrConnectWithoutGroupsInput;

    @Field(() => OrganizationWhereUniqueInput, {nullable:true})
    @Type(() => OrganizationWhereUniqueInput)
    connect?: OrganizationWhereUniqueInput;
}
