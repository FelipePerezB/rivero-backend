import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradeCreateWithoutUsersInput } from './grade-create-without-users.input';
import { Type } from 'class-transformer';
import { GradeCreateOrConnectWithoutUsersInput } from './grade-create-or-connect-without-users.input';
import { GradeUpsertWithoutUsersInput } from './grade-upsert-without-users.input';
import { GradeWhereUniqueInput } from './grade-where-unique.input';
import { GradeUpdateWithoutUsersInput } from './grade-update-without-users.input';

@InputType()
export class GradeUpdateOneRequiredWithoutUsersNestedInput {

    @Field(() => GradeCreateWithoutUsersInput, {nullable:true})
    @Type(() => GradeCreateWithoutUsersInput)
    create?: GradeCreateWithoutUsersInput;

    @Field(() => GradeCreateOrConnectWithoutUsersInput, {nullable:true})
    @Type(() => GradeCreateOrConnectWithoutUsersInput)
    connectOrCreate?: GradeCreateOrConnectWithoutUsersInput;

    @Field(() => GradeUpsertWithoutUsersInput, {nullable:true})
    @Type(() => GradeUpsertWithoutUsersInput)
    upsert?: GradeUpsertWithoutUsersInput;

    @Field(() => GradeWhereUniqueInput, {nullable:true})
    @Type(() => GradeWhereUniqueInput)
    connect?: GradeWhereUniqueInput;

    @Field(() => GradeUpdateWithoutUsersInput, {nullable:true})
    @Type(() => GradeUpdateWithoutUsersInput)
    update?: GradeUpdateWithoutUsersInput;
}
