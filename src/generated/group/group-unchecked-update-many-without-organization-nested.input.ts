import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupCreateWithoutOrganizationInput } from './group-create-without-organization.input';
import { Type } from 'class-transformer';
import { GroupCreateOrConnectWithoutOrganizationInput } from './group-create-or-connect-without-organization.input';
import { GroupUpsertWithWhereUniqueWithoutOrganizationInput } from './group-upsert-with-where-unique-without-organization.input';
import { GroupCreateManyOrganizationInputEnvelope } from './group-create-many-organization-input-envelope.input';
import { GroupWhereUniqueInput } from './group-where-unique.input';
import { GroupUpdateWithWhereUniqueWithoutOrganizationInput } from './group-update-with-where-unique-without-organization.input';
import { GroupUpdateManyWithWhereWithoutOrganizationInput } from './group-update-many-with-where-without-organization.input';
import { GroupScalarWhereInput } from './group-scalar-where.input';

@InputType()
export class GroupUncheckedUpdateManyWithoutOrganizationNestedInput {

    @Field(() => [GroupCreateWithoutOrganizationInput], {nullable:true})
    @Type(() => GroupCreateWithoutOrganizationInput)
    create?: Array<GroupCreateWithoutOrganizationInput>;

    @Field(() => [GroupCreateOrConnectWithoutOrganizationInput], {nullable:true})
    @Type(() => GroupCreateOrConnectWithoutOrganizationInput)
    connectOrCreate?: Array<GroupCreateOrConnectWithoutOrganizationInput>;

    @Field(() => [GroupUpsertWithWhereUniqueWithoutOrganizationInput], {nullable:true})
    @Type(() => GroupUpsertWithWhereUniqueWithoutOrganizationInput)
    upsert?: Array<GroupUpsertWithWhereUniqueWithoutOrganizationInput>;

    @Field(() => GroupCreateManyOrganizationInputEnvelope, {nullable:true})
    @Type(() => GroupCreateManyOrganizationInputEnvelope)
    createMany?: GroupCreateManyOrganizationInputEnvelope;

    @Field(() => [GroupWhereUniqueInput], {nullable:true})
    @Type(() => GroupWhereUniqueInput)
    set?: Array<GroupWhereUniqueInput>;

    @Field(() => [GroupWhereUniqueInput], {nullable:true})
    @Type(() => GroupWhereUniqueInput)
    disconnect?: Array<GroupWhereUniqueInput>;

    @Field(() => [GroupWhereUniqueInput], {nullable:true})
    @Type(() => GroupWhereUniqueInput)
    delete?: Array<GroupWhereUniqueInput>;

    @Field(() => [GroupWhereUniqueInput], {nullable:true})
    @Type(() => GroupWhereUniqueInput)
    connect?: Array<GroupWhereUniqueInput>;

    @Field(() => [GroupUpdateWithWhereUniqueWithoutOrganizationInput], {nullable:true})
    @Type(() => GroupUpdateWithWhereUniqueWithoutOrganizationInput)
    update?: Array<GroupUpdateWithWhereUniqueWithoutOrganizationInput>;

    @Field(() => [GroupUpdateManyWithWhereWithoutOrganizationInput], {nullable:true})
    @Type(() => GroupUpdateManyWithWhereWithoutOrganizationInput)
    updateMany?: Array<GroupUpdateManyWithWhereWithoutOrganizationInput>;

    @Field(() => [GroupScalarWhereInput], {nullable:true})
    @Type(() => GroupScalarWhereInput)
    deleteMany?: Array<GroupScalarWhereInput>;
}
