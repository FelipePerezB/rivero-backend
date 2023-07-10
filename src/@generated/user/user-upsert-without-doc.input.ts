import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutDocInput } from './user-update-without-doc.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutDocInput } from './user-create-without-doc.input';

@InputType()
export class UserUpsertWithoutDocInput {

    @Field(() => UserUpdateWithoutDocInput, {nullable:false})
    @Type(() => UserUpdateWithoutDocInput)
    update!: UserUpdateWithoutDocInput;

    @Field(() => UserCreateWithoutDocInput, {nullable:false})
    @Type(() => UserCreateWithoutDocInput)
    create!: UserCreateWithoutDocInput;
}
