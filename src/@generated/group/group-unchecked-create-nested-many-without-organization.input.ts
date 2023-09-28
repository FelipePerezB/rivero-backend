import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupCreateWithoutOrganizationInput } from './group-create-without-organization.input';
import { Type } from 'class-transformer';
import { GroupCreateOrConnectWithoutOrganizationInput } from './group-create-or-connect-without-organization.input';
import { GroupCreateManyOrganizationInputEnvelope } from './group-create-many-organization-input-envelope.input';
import { GroupWhereUniqueInput } from './group-where-unique.input';

@InputType()
export class GroupUncheckedCreateNestedManyWithoutOrganizationInput {

    @Field(() => [GroupCreateWithoutOrganizationInput], {nullable:true})
    @Type(() => GroupCreateWithoutOrganizationInput)
    create?: Array<GroupCreateWithoutOrganizationInput>;

    @Field(() => [GroupCreateOrConnectWithoutOrganizationInput], {nullable:true})
    @Type(() => GroupCreateOrConnectWithoutOrganizationInput)
    connectOrCreate?: Array<GroupCreateOrConnectWithoutOrganizationInput>;

    @Field(() => GroupCreateManyOrganizationInputEnvelope, {nullable:true})
    @Type(() => GroupCreateManyOrganizationInputEnvelope)
    createMany?: GroupCreateManyOrganizationInputEnvelope;

    @Field(() => [GroupWhereUniqueInput], {nullable:true})
    @Type(() => GroupWhereUniqueInput)
    connect?: Array<GroupWhereUniqueInput>;
}
