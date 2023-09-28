import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutGroupInput } from './user-create-without-group.input';

@InputType()
export class UserCreateOrConnectWithoutGroupInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutGroupInput, {nullable:false})
    @Type(() => UserCreateWithoutGroupInput)
    create!: UserCreateWithoutGroupInput;
}
