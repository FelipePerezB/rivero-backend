import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedManyWithoutGroupInput } from '../user/user-create-nested-many-without-group.input';

@InputType()
export class GroupCreateWithoutOrganizationInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => UserCreateNestedManyWithoutGroupInput, {nullable:true})
    Users?: UserCreateNestedManyWithoutGroupInput;
}
