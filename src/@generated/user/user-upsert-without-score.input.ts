import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutScoreInput } from './user-update-without-score.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutScoreInput } from './user-create-without-score.input';

@InputType()
export class UserUpsertWithoutScoreInput {

    @Field(() => UserUpdateWithoutScoreInput, {nullable:false})
    @Type(() => UserUpdateWithoutScoreInput)
    update!: UserUpdateWithoutScoreInput;

    @Field(() => UserCreateWithoutScoreInput, {nullable:false})
    @Type(() => UserCreateWithoutScoreInput)
    create!: UserCreateWithoutScoreInput;
}
