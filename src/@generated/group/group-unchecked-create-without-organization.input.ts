import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserUncheckedCreateNestedManyWithoutGroupInput } from '../user/user-unchecked-create-nested-many-without-group.input';

@InputType()
export class GroupUncheckedCreateWithoutOrganizationInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => UserUncheckedCreateNestedManyWithoutGroupInput, {nullable:true})
    Users?: UserUncheckedCreateNestedManyWithoutGroupInput;
}
