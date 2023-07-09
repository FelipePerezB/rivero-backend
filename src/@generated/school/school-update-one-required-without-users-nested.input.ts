import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchoolCreateWithoutUsersInput } from './school-create-without-users.input';
import { Type } from 'class-transformer';
import { SchoolCreateOrConnectWithoutUsersInput } from './school-create-or-connect-without-users.input';
import { SchoolUpsertWithoutUsersInput } from './school-upsert-without-users.input';
import { SchoolWhereUniqueInput } from './school-where-unique.input';
import { SchoolUpdateWithoutUsersInput } from './school-update-without-users.input';

@InputType()
export class SchoolUpdateOneRequiredWithoutUsersNestedInput {

    @Field(() => SchoolCreateWithoutUsersInput, {nullable:true})
    @Type(() => SchoolCreateWithoutUsersInput)
    create?: SchoolCreateWithoutUsersInput;

    @Field(() => SchoolCreateOrConnectWithoutUsersInput, {nullable:true})
    @Type(() => SchoolCreateOrConnectWithoutUsersInput)
    connectOrCreate?: SchoolCreateOrConnectWithoutUsersInput;

    @Field(() => SchoolUpsertWithoutUsersInput, {nullable:true})
    @Type(() => SchoolUpsertWithoutUsersInput)
    upsert?: SchoolUpsertWithoutUsersInput;

    @Field(() => SchoolWhereUniqueInput, {nullable:true})
    @Type(() => SchoolWhereUniqueInput)
    connect?: SchoolWhereUniqueInput;

    @Field(() => SchoolUpdateWithoutUsersInput, {nullable:true})
    @Type(() => SchoolUpdateWithoutUsersInput)
    update?: SchoolUpdateWithoutUsersInput;
}
