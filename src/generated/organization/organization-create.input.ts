import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedManyWithoutOrganizationInput } from '../user/user-create-nested-many-without-organization.input';
import { GroupCreateNestedManyWithoutOrganizationInput } from '../group/group-create-nested-many-without-organization.input';

@InputType()
export class OrganizationCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => UserCreateNestedManyWithoutOrganizationInput, {nullable:true})
    Users?: UserCreateNestedManyWithoutOrganizationInput;

    @Field(() => GroupCreateNestedManyWithoutOrganizationInput, {nullable:true})
    Groups?: GroupCreateNestedManyWithoutOrganizationInput;
}
