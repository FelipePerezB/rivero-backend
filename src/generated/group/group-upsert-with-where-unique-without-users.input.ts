import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupWhereUniqueInput } from './group-where-unique.input';
import { Type } from 'class-transformer';
import { GroupUpdateWithoutUsersInput } from './group-update-without-users.input';
import { GroupCreateWithoutUsersInput } from './group-create-without-users.input';

@InputType()
export class GroupUpsertWithWhereUniqueWithoutUsersInput {

    @Field(() => GroupWhereUniqueInput, {nullable:false})
    @Type(() => GroupWhereUniqueInput)
    where!: GroupWhereUniqueInput;

    @Field(() => GroupUpdateWithoutUsersInput, {nullable:false})
    @Type(() => GroupUpdateWithoutUsersInput)
    update!: GroupUpdateWithoutUsersInput;

    @Field(() => GroupCreateWithoutUsersInput, {nullable:false})
    @Type(() => GroupCreateWithoutUsersInput)
    create!: GroupCreateWithoutUsersInput;
}
