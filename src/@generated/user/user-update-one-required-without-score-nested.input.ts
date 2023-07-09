import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutScoreInput } from './user-create-without-score.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutScoreInput } from './user-create-or-connect-without-score.input';
import { UserUpsertWithoutScoreInput } from './user-upsert-without-score.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutScoreInput } from './user-update-without-score.input';

@InputType()
export class UserUpdateOneRequiredWithoutScoreNestedInput {

    @Field(() => UserCreateWithoutScoreInput, {nullable:true})
    @Type(() => UserCreateWithoutScoreInput)
    create?: UserCreateWithoutScoreInput;

    @Field(() => UserCreateOrConnectWithoutScoreInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutScoreInput)
    connectOrCreate?: UserCreateOrConnectWithoutScoreInput;

    @Field(() => UserUpsertWithoutScoreInput, {nullable:true})
    @Type(() => UserUpsertWithoutScoreInput)
    upsert?: UserUpsertWithoutScoreInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutScoreInput, {nullable:true})
    @Type(() => UserUpdateWithoutScoreInput)
    update?: UserUpdateWithoutScoreInput;
}
