import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFileInput } from './user-create-without-file.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFileInput } from './user-create-or-connect-without-file.input';
import { UserUpsertWithoutFileInput } from './user-upsert-without-file.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutFileInput } from './user-update-to-one-with-where-without-file.input';

@InputType()
export class UserUpdateOneRequiredWithoutFileNestedInput {

    @Field(() => UserCreateWithoutFileInput, {nullable:true})
    @Type(() => UserCreateWithoutFileInput)
    create?: UserCreateWithoutFileInput;

    @Field(() => UserCreateOrConnectWithoutFileInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutFileInput)
    connectOrCreate?: UserCreateOrConnectWithoutFileInput;

    @Field(() => UserUpsertWithoutFileInput, {nullable:true})
    @Type(() => UserUpsertWithoutFileInput)
    upsert?: UserUpsertWithoutFileInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateToOneWithWhereWithoutFileInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutFileInput)
    update?: UserUpdateToOneWithWhereWithoutFileInput;
}
