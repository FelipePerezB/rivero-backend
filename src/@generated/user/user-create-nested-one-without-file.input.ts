import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFileInput } from './user-create-without-file.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFileInput } from './user-create-or-connect-without-file.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutFileInput {

    @Field(() => UserCreateWithoutFileInput, {nullable:true})
    @Type(() => UserCreateWithoutFileInput)
    create?: UserCreateWithoutFileInput;

    @Field(() => UserCreateOrConnectWithoutFileInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutFileInput)
    connectOrCreate?: UserCreateOrConnectWithoutFileInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
