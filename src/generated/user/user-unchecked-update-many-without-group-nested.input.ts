import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutGroupInput } from './user-create-without-group.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutGroupInput } from './user-create-or-connect-without-group.input';
import { UserUpsertWithWhereUniqueWithoutGroupInput } from './user-upsert-with-where-unique-without-group.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutGroupInput } from './user-update-with-where-unique-without-group.input';
import { UserUpdateManyWithWhereWithoutGroupInput } from './user-update-many-with-where-without-group.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUncheckedUpdateManyWithoutGroupNestedInput {

    @Field(() => [UserCreateWithoutGroupInput], {nullable:true})
    @Type(() => UserCreateWithoutGroupInput)
    create?: Array<UserCreateWithoutGroupInput>;

    @Field(() => [UserCreateOrConnectWithoutGroupInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutGroupInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutGroupInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutGroupInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutGroupInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutGroupInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    set?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    disconnect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    delete?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutGroupInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutGroupInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutGroupInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutGroupInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutGroupInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutGroupInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}
