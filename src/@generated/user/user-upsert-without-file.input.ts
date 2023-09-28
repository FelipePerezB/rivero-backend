import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutFileInput } from './user-update-without-file.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutFileInput } from './user-create-without-file.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutFileInput {

    @Field(() => UserUpdateWithoutFileInput, {nullable:false})
    @Type(() => UserUpdateWithoutFileInput)
    update!: UserUpdateWithoutFileInput;

    @Field(() => UserCreateWithoutFileInput, {nullable:false})
    @Type(() => UserCreateWithoutFileInput)
    create!: UserCreateWithoutFileInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
