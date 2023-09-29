import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationWhereInput } from './organization-where.input';
import { Type } from 'class-transformer';
import { OrganizationUpdateWithoutGroupsInput } from './organization-update-without-groups.input';

@InputType()
export class OrganizationUpdateToOneWithWhereWithoutGroupsInput {

    @Field(() => OrganizationWhereInput, {nullable:true})
    @Type(() => OrganizationWhereInput)
    where?: OrganizationWhereInput;

    @Field(() => OrganizationUpdateWithoutGroupsInput, {nullable:false})
    @Type(() => OrganizationUpdateWithoutGroupsInput)
    data!: OrganizationUpdateWithoutGroupsInput;
}
