import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchoolWhereUniqueInput } from './school-where-unique.input';
import { Type } from 'class-transformer';
import { SchoolCreateWithoutUsersInput } from './school-create-without-users.input';

@InputType()
export class SchoolCreateOrConnectWithoutUsersInput {

    @Field(() => SchoolWhereUniqueInput, {nullable:false})
    @Type(() => SchoolWhereUniqueInput)
    where!: SchoolWhereUniqueInput;

    @Field(() => SchoolCreateWithoutUsersInput, {nullable:false})
    @Type(() => SchoolCreateWithoutUsersInput)
    create!: SchoolCreateWithoutUsersInput;
}
