import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutFileInput } from './user-update-without-file.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutFileInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutFileInput, {nullable:false})
    @Type(() => UserUpdateWithoutFileInput)
    data!: UserUpdateWithoutFileInput;
}
