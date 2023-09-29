import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupWhereUniqueInput } from './group-where-unique.input';
import { Type } from 'class-transformer';
import { GroupUpdateWithoutUsersInput } from './group-update-without-users.input';

@InputType()
export class GroupUpdateWithWhereUniqueWithoutUsersInput {

    @Field(() => GroupWhereUniqueInput, {nullable:false})
    @Type(() => GroupWhereUniqueInput)
    where!: GroupWhereUniqueInput;

    @Field(() => GroupUpdateWithoutUsersInput, {nullable:false})
    @Type(() => GroupUpdateWithoutUsersInput)
    data!: GroupUpdateWithoutUsersInput;
}
