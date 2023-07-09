import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradeUpdateWithoutUsersInput } from './grade-update-without-users.input';
import { Type } from 'class-transformer';
import { GradeCreateWithoutUsersInput } from './grade-create-without-users.input';

@InputType()
export class GradeUpsertWithoutUsersInput {

    @Field(() => GradeUpdateWithoutUsersInput, {nullable:false})
    @Type(() => GradeUpdateWithoutUsersInput)
    update!: GradeUpdateWithoutUsersInput;

    @Field(() => GradeCreateWithoutUsersInput, {nullable:false})
    @Type(() => GradeCreateWithoutUsersInput)
    create!: GradeCreateWithoutUsersInput;
}
