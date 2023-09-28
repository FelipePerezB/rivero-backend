import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutGroupInput } from './user-update-without-group.input';
import { UserCreateWithoutGroupInput } from './user-create-without-group.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutGroupInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutGroupInput, {nullable:false})
    @Type(() => UserUpdateWithoutGroupInput)
    update!: UserUpdateWithoutGroupInput;

    @Field(() => UserCreateWithoutGroupInput, {nullable:false})
    @Type(() => UserCreateWithoutGroupInput)
    create!: UserCreateWithoutGroupInput;
}
