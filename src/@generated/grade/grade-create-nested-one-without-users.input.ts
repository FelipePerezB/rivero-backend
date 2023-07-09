import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradeCreateWithoutUsersInput } from './grade-create-without-users.input';
import { Type } from 'class-transformer';
import { GradeCreateOrConnectWithoutUsersInput } from './grade-create-or-connect-without-users.input';
import { GradeWhereUniqueInput } from './grade-where-unique.input';

@InputType()
export class GradeCreateNestedOneWithoutUsersInput {

    @Field(() => GradeCreateWithoutUsersInput, {nullable:true})
    @Type(() => GradeCreateWithoutUsersInput)
    create?: GradeCreateWithoutUsersInput;

    @Field(() => GradeCreateOrConnectWithoutUsersInput, {nullable:true})
    @Type(() => GradeCreateOrConnectWithoutUsersInput)
    connectOrCreate?: GradeCreateOrConnectWithoutUsersInput;

    @Field(() => GradeWhereUniqueInput, {nullable:true})
    @Type(() => GradeWhereUniqueInput)
    connect?: GradeWhereUniqueInput;
}
