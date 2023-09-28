import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutGroupInput } from './user-create-without-group.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutGroupInput } from './user-create-or-connect-without-group.input';
import { UserCreateManyGroupInputEnvelope } from './user-create-many-group-input-envelope.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUncheckedCreateNestedManyWithoutGroupInput {

    @Field(() => [UserCreateWithoutGroupInput], {nullable:true})
    @Type(() => UserCreateWithoutGroupInput)
    create?: Array<UserCreateWithoutGroupInput>;

    @Field(() => [UserCreateOrConnectWithoutGroupInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutGroupInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutGroupInput>;

    @Field(() => UserCreateManyGroupInputEnvelope, {nullable:true})
    @Type(() => UserCreateManyGroupInputEnvelope)
    createMany?: UserCreateManyGroupInputEnvelope;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<UserWhereUniqueInput>;
}
