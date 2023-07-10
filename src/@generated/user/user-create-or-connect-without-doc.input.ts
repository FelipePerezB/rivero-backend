import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutDocInput } from './user-create-without-doc.input';

@InputType()
export class UserCreateOrConnectWithoutDocInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutDocInput, {nullable:false})
    @Type(() => UserCreateWithoutDocInput)
    create!: UserCreateWithoutDocInput;
}
