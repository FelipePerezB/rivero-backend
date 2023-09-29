import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutScoreInput } from './user-create-without-score.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutScoreInput } from './user-create-or-connect-without-score.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutScoreInput {

    @Field(() => UserCreateWithoutScoreInput, {nullable:true})
    @Type(() => UserCreateWithoutScoreInput)
    create?: UserCreateWithoutScoreInput;

    @Field(() => UserCreateOrConnectWithoutScoreInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutScoreInput)
    connectOrCreate?: UserCreateOrConnectWithoutScoreInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
