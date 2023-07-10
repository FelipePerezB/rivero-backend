import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutDocInput } from './user-create-without-doc.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutDocInput } from './user-create-or-connect-without-doc.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutDocInput {

    @Field(() => UserCreateWithoutDocInput, {nullable:true})
    @Type(() => UserCreateWithoutDocInput)
    create?: UserCreateWithoutDocInput;

    @Field(() => UserCreateOrConnectWithoutDocInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutDocInput)
    connectOrCreate?: UserCreateOrConnectWithoutDocInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
