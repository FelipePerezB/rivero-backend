import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutSchoolInput } from './user-update-without-school.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutSchoolInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutSchoolInput, {nullable:false})
    @Type(() => UserUpdateWithoutSchoolInput)
    data!: UserUpdateWithoutSchoolInput;
}