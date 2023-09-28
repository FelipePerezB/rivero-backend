import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationUpdateWithoutGroupsInput } from './organization-update-without-groups.input';
import { Type } from 'class-transformer';
import { OrganizationCreateWithoutGroupsInput } from './organization-create-without-groups.input';
import { OrganizationWhereInput } from './organization-where.input';

@InputType()
export class OrganizationUpsertWithoutGroupsInput {

    @Field(() => OrganizationUpdateWithoutGroupsInput, {nullable:false})
    @Type(() => OrganizationUpdateWithoutGroupsInput)
    update!: OrganizationUpdateWithoutGroupsInput;

    @Field(() => OrganizationCreateWithoutGroupsInput, {nullable:false})
    @Type(() => OrganizationCreateWithoutGroupsInput)
    create!: OrganizationCreateWithoutGroupsInput;

    @Field(() => OrganizationWhereInput, {nullable:true})
    @Type(() => OrganizationWhereInput)
    where?: OrganizationWhereInput;
}
