import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserUncheckedCreateNestedManyWithoutOrganizationInput } from '../user/user-unchecked-create-nested-many-without-organization.input';
import { GroupUncheckedCreateNestedManyWithoutOrganizationInput } from '../group/group-unchecked-create-nested-many-without-organization.input';

@InputType()
export class OrganizationUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => UserUncheckedCreateNestedManyWithoutOrganizationInput, {nullable:true})
    Users?: UserUncheckedCreateNestedManyWithoutOrganizationInput;

    @Field(() => GroupUncheckedCreateNestedManyWithoutOrganizationInput, {nullable:true})
    Groups?: GroupUncheckedCreateNestedManyWithoutOrganizationInput;
}
