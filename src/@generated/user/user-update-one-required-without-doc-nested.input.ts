import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutDocInput } from './user-create-without-doc.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutDocInput } from './user-create-or-connect-without-doc.input';
import { UserUpsertWithoutDocInput } from './user-upsert-without-doc.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutDocInput } from './user-update-without-doc.input';

@InputType()
export class UserUpdateOneRequiredWithoutDocNestedInput {

    @Field(() => UserCreateWithoutDocInput, {nullable:true})
    @Type(() => UserCreateWithoutDocInput)
    create?: UserCreateWithoutDocInput;

    @Field(() => UserCreateOrConnectWithoutDocInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutDocInput)
    connectOrCreate?: UserCreateOrConnectWithoutDocInput;

    @Field(() => UserUpsertWithoutDocInput, {nullable:true})
    @Type(() => UserUpsertWithoutDocInput)
    upsert?: UserUpsertWithoutDocInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutDocInput, {nullable:true})
    @Type(() => UserUpdateWithoutDocInput)
    update?: UserUpdateWithoutDocInput;
}
