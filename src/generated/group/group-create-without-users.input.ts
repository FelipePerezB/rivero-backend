import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationCreateNestedOneWithoutGroupsInput } from '../organization/organization-create-nested-one-without-groups.input';

@InputType()
export class GroupCreateWithoutUsersInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => OrganizationCreateNestedOneWithoutGroupsInput, {nullable:false})
    Organization!: OrganizationCreateNestedOneWithoutGroupsInput;
}
