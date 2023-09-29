import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutScoreInput } from './user-update-without-score.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutScoreInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutScoreInput, {nullable:false})
    @Type(() => UserUpdateWithoutScoreInput)
    data!: UserUpdateWithoutScoreInput;
}
