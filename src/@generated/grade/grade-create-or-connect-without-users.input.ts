import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradeWhereUniqueInput } from './grade-where-unique.input';
import { Type } from 'class-transformer';
import { GradeCreateWithoutUsersInput } from './grade-create-without-users.input';

@InputType()
export class GradeCreateOrConnectWithoutUsersInput {

    @Field(() => GradeWhereUniqueInput, {nullable:false})
    @Type(() => GradeWhereUniqueInput)
    where!: GradeWhereUniqueInput;

    @Field(() => GradeCreateWithoutUsersInput, {nullable:false})
    @Type(() => GradeCreateWithoutUsersInput)
    create!: GradeCreateWithoutUsersInput;
}
