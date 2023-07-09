import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutGradeInput } from './user-create-without-grade.input';

@InputType()
export class UserCreateOrConnectWithoutGradeInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutGradeInput, {nullable:false})
    @Type(() => UserCreateWithoutGradeInput)
    create!: UserCreateWithoutGradeInput;
}
