import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutGradeInput } from './user-create-without-grade.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutGradeInput } from './user-create-or-connect-without-grade.input';
import { UserUpsertWithWhereUniqueWithoutGradeInput } from './user-upsert-with-where-unique-without-grade.input';
import { UserCreateManyGradeInputEnvelope } from './user-create-many-grade-input-envelope.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutGradeInput } from './user-update-with-where-unique-without-grade.input';
import { UserUpdateManyWithWhereWithoutGradeInput } from './user-update-many-with-where-without-grade.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUncheckedUpdateManyWithoutGradeNestedInput {

    @Field(() => [UserCreateWithoutGradeInput], {nullable:true})
    @Type(() => UserCreateWithoutGradeInput)
    create?: Array<UserCreateWithoutGradeInput>;

    @Field(() => [UserCreateOrConnectWithoutGradeInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutGradeInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutGradeInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutGradeInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutGradeInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutGradeInput>;

    @Field(() => UserCreateManyGradeInputEnvelope, {nullable:true})
    @Type(() => UserCreateManyGradeInputEnvelope)
    createMany?: UserCreateManyGradeInputEnvelope;

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

    @Field(() => [UserUpdateWithWhereUniqueWithoutGradeInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutGradeInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutGradeInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutGradeInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutGradeInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutGradeInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}
