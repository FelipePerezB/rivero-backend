import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationCreateWithoutGroupsInput } from './organization-create-without-groups.input';
import { Type } from 'class-transformer';
import { OrganizationCreateOrConnectWithoutGroupsInput } from './organization-create-or-connect-without-groups.input';
import { OrganizationUpsertWithoutGroupsInput } from './organization-upsert-without-groups.input';
import { OrganizationWhereUniqueInput } from './organization-where-unique.input';
import { OrganizationUpdateToOneWithWhereWithoutGroupsInput } from './organization-update-to-one-with-where-without-groups.input';

@InputType()
export class OrganizationUpdateOneRequiredWithoutGroupsNestedInput {

    @Field(() => OrganizationCreateWithoutGroupsInput, {nullable:true})
    @Type(() => OrganizationCreateWithoutGroupsInput)
    create?: OrganizationCreateWithoutGroupsInput;

    @Field(() => OrganizationCreateOrConnectWithoutGroupsInput, {nullable:true})
    @Type(() => OrganizationCreateOrConnectWithoutGroupsInput)
    connectOrCreate?: OrganizationCreateOrConnectWithoutGroupsInput;

    @Field(() => OrganizationUpsertWithoutGroupsInput, {nullable:true})
    @Type(() => OrganizationUpsertWithoutGroupsInput)
    upsert?: OrganizationUpsertWithoutGroupsInput;

    @Field(() => OrganizationWhereUniqueInput, {nullable:true})
    @Type(() => OrganizationWhereUniqueInput)
    connect?: OrganizationWhereUniqueInput;

    @Field(() => OrganizationUpdateToOneWithWhereWithoutGroupsInput, {nullable:true})
    @Type(() => OrganizationUpdateToOneWithWhereWithoutGroupsInput)
    update?: OrganizationUpdateToOneWithWhereWithoutGroupsInput;
}
