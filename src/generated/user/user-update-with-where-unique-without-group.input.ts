import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutGroupInput } from './user-update-without-group.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutGroupInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutGroupInput, {nullable:false})
    @Type(() => UserUpdateWithoutGroupInput)
    data!: UserUpdateWithoutGroupInput;
}
