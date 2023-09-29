import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupWhereUniqueInput } from './group-where-unique.input';
import { Type } from 'class-transformer';
import { GroupUpdateWithoutOrganizationInput } from './group-update-without-organization.input';

@InputType()
export class GroupUpdateWithWhereUniqueWithoutOrganizationInput {

    @Field(() => GroupWhereUniqueInput, {nullable:false})
    @Type(() => GroupWhereUniqueInput)
    where!: GroupWhereUniqueInput;

    @Field(() => GroupUpdateWithoutOrganizationInput, {nullable:false})
    @Type(() => GroupUpdateWithoutOrganizationInput)
    data!: GroupUpdateWithoutOrganizationInput;
}
