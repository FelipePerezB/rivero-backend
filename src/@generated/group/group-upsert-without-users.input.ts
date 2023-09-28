import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupUpdateWithoutUsersInput } from './group-update-without-users.input';
import { Type } from 'class-transformer';
import { GroupCreateWithoutUsersInput } from './group-create-without-users.input';
import { GroupWhereInput } from './group-where.input';

@InputType()
export class GroupUpsertWithoutUsersInput {

    @Field(() => GroupUpdateWithoutUsersInput, {nullable:false})
    @Type(() => GroupUpdateWithoutUsersInput)
    update!: GroupUpdateWithoutUsersInput;

    @Field(() => GroupCreateWithoutUsersInput, {nullable:false})
    @Type(() => GroupCreateWithoutUsersInput)
    create!: GroupCreateWithoutUsersInput;

    @Field(() => GroupWhereInput, {nullable:true})
    @Type(() => GroupWhereInput)
    where?: GroupWhereInput;
}
