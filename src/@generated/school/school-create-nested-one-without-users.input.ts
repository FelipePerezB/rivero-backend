import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchoolCreateWithoutUsersInput } from './school-create-without-users.input';
import { Type } from 'class-transformer';
import { SchoolCreateOrConnectWithoutUsersInput } from './school-create-or-connect-without-users.input';
import { SchoolWhereUniqueInput } from './school-where-unique.input';

@InputType()
export class SchoolCreateNestedOneWithoutUsersInput {

    @Field(() => SchoolCreateWithoutUsersInput, {nullable:true})
    @Type(() => SchoolCreateWithoutUsersInput)
    create?: SchoolCreateWithoutUsersInput;

    @Field(() => SchoolCreateOrConnectWithoutUsersInput, {nullable:true})
    @Type(() => SchoolCreateOrConnectWithoutUsersInput)
    connectOrCreate?: SchoolCreateOrConnectWithoutUsersInput;

    @Field(() => SchoolWhereUniqueInput, {nullable:true})
    @Type(() => SchoolWhereUniqueInput)
    connect?: SchoolWhereUniqueInput;
}
