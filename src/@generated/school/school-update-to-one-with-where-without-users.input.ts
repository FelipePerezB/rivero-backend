import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchoolWhereInput } from './school-where.input';
import { Type } from 'class-transformer';
import { SchoolUpdateWithoutUsersInput } from './school-update-without-users.input';

@InputType()
export class SchoolUpdateToOneWithWhereWithoutUsersInput {

    @Field(() => SchoolWhereInput, {nullable:true})
    @Type(() => SchoolWhereInput)
    where?: SchoolWhereInput;

    @Field(() => SchoolUpdateWithoutUsersInput, {nullable:false})
    @Type(() => SchoolUpdateWithoutUsersInput)
    data!: SchoolUpdateWithoutUsersInput;
}
