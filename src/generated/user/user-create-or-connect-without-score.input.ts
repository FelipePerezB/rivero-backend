import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutScoreInput } from './user-create-without-score.input';

@InputType()
export class UserCreateOrConnectWithoutScoreInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutScoreInput, {nullable:false})
    @Type(() => UserCreateWithoutScoreInput)
    create!: UserCreateWithoutScoreInput;
}
