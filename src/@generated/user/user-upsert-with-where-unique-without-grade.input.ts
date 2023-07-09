import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutGradeInput } from './user-update-without-grade.input';
import { UserCreateWithoutGradeInput } from './user-create-without-grade.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutGradeInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutGradeInput, {nullable:false})
    @Type(() => UserUpdateWithoutGradeInput)
    update!: UserUpdateWithoutGradeInput;

    @Field(() => UserCreateWithoutGradeInput, {nullable:false})
    @Type(() => UserCreateWithoutGradeInput)
    create!: UserCreateWithoutGradeInput;
}
