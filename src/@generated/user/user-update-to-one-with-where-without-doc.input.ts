import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutDocInput } from './user-update-without-doc.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutDocInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutDocInput, {nullable:false})
    @Type(() => UserUpdateWithoutDocInput)
    data!: UserUpdateWithoutDocInput;
}
