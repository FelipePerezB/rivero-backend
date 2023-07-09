import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutGradeInput } from './user-create-without-grade.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutGradeInput } from './user-create-or-connect-without-grade.input';
import { UserCreateManyGradeInputEnvelope } from './user-create-many-grade-input-envelope.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedManyWithoutGradeInput {

    @Field(() => [UserCreateWithoutGradeInput], {nullable:true})
    @Type(() => UserCreateWithoutGradeInput)
    create?: Array<UserCreateWithoutGradeInput>;

    @Field(() => [UserCreateOrConnectWithoutGradeInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutGradeInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutGradeInput>;

    @Field(() => UserCreateManyGradeInputEnvelope, {nullable:true})
    @Type(() => UserCreateManyGradeInputEnvelope)
    createMany?: UserCreateManyGradeInputEnvelope;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<UserWhereUniqueInput>;
}
