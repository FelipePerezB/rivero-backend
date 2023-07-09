import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchoolUpdateWithoutUsersInput } from './school-update-without-users.input';
import { Type } from 'class-transformer';
import { SchoolCreateWithoutUsersInput } from './school-create-without-users.input';

@InputType()
export class SchoolUpsertWithoutUsersInput {

    @Field(() => SchoolUpdateWithoutUsersInput, {nullable:false})
    @Type(() => SchoolUpdateWithoutUsersInput)
    update!: SchoolUpdateWithoutUsersInput;

    @Field(() => SchoolCreateWithoutUsersInput, {nullable:false})
    @Type(() => SchoolCreateWithoutUsersInput)
    create!: SchoolCreateWithoutUsersInput;
}
