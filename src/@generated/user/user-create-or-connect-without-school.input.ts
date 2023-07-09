import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutSchoolInput } from './user-create-without-school.input';

@InputType()
export class UserCreateOrConnectWithoutSchoolInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutSchoolInput, {nullable:false})
    @Type(() => UserCreateWithoutSchoolInput)
    create!: UserCreateWithoutSchoolInput;
}
