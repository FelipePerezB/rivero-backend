import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupWhereInput } from './group-where.input';
import { Type } from 'class-transformer';
import { GroupUpdateWithoutUsersInput } from './group-update-without-users.input';

@InputType()
export class GroupUpdateToOneWithWhereWithoutUsersInput {

    @Field(() => GroupWhereInput, {nullable:true})
    @Type(() => GroupWhereInput)
    where?: GroupWhereInput;

    @Field(() => GroupUpdateWithoutUsersInput, {nullable:false})
    @Type(() => GroupUpdateWithoutUsersInput)
    data!: GroupUpdateWithoutUsersInput;
}
