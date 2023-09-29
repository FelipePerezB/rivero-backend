import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupWhereUniqueInput } from './group-where-unique.input';
import { Type } from 'class-transformer';
import { GroupCreateWithoutUsersInput } from './group-create-without-users.input';

@InputType()
export class GroupCreateOrConnectWithoutUsersInput {

    @Field(() => GroupWhereUniqueInput, {nullable:false})
    @Type(() => GroupWhereUniqueInput)
    where!: GroupWhereUniqueInput;

    @Field(() => GroupCreateWithoutUsersInput, {nullable:false})
    @Type(() => GroupCreateWithoutUsersInput)
    create!: GroupCreateWithoutUsersInput;
}
