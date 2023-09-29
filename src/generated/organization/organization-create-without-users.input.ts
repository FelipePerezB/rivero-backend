import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupCreateNestedManyWithoutOrganizationInput } from '../group/group-create-nested-many-without-organization.input';

@InputType()
export class OrganizationCreateWithoutUsersInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => GroupCreateNestedManyWithoutOrganizationInput, {nullable:true})
    Groups?: GroupCreateNestedManyWithoutOrganizationInput;
}
