import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutFileInput } from './user-create-without-file.input';

@InputType()
export class UserCreateOrConnectWithoutFileInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutFileInput, {nullable:false})
    @Type(() => UserCreateWithoutFileInput)
    create!: UserCreateWithoutFileInput;
}
