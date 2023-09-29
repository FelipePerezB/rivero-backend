import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupWhereUniqueInput } from './group-where-unique.input';
import { Type } from 'class-transformer';
import { GroupUpdateWithoutOrganizationInput } from './group-update-without-organization.input';
import { GroupCreateWithoutOrganizationInput } from './group-create-without-organization.input';

@InputType()
export class GroupUpsertWithWhereUniqueWithoutOrganizationInput {

    @Field(() => GroupWhereUniqueInput, {nullable:false})
    @Type(() => GroupWhereUniqueInput)
    where!: GroupWhereUniqueInput;

    @Field(() => GroupUpdateWithoutOrganizationInput, {nullable:false})
    @Type(() => GroupUpdateWithoutOrganizationInput)
    update!: GroupUpdateWithoutOrganizationInput;

    @Field(() => GroupCreateWithoutOrganizationInput, {nullable:false})
    @Type(() => GroupCreateWithoutOrganizationInput)
    create!: GroupCreateWithoutOrganizationInput;
}
