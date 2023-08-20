import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradeWhereInput } from './grade-where.input';
import { Type } from 'class-transformer';
import { GradeUpdateWithoutUsersInput } from './grade-update-without-users.input';

@InputType()
export class GradeUpdateToOneWithWhereWithoutUsersInput {

    @Field(() => GradeWhereInput, {nullable:true})
    @Type(() => GradeWhereInput)
    where?: GradeWhereInput;

    @Field(() => GradeUpdateWithoutUsersInput, {nullable:false})
    @Type(() => GradeUpdateWithoutUsersInput)
    data!: GradeUpdateWithoutUsersInput;
}
