import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupCreateWithoutUsersInput } from './group-create-without-users.input';
import { Type } from 'class-transformer';
import { GroupCreateOrConnectWithoutUsersInput } from './group-create-or-connect-without-users.input';
import { GroupUpsertWithWhereUniqueWithoutUsersInput } from './group-upsert-with-where-unique-without-users.input';
import { GroupWhereUniqueInput } from './group-where-unique.input';
import { GroupUpdateWithWhereUniqueWithoutUsersInput } from './group-update-with-where-unique-without-users.input';
import { GroupUpdateManyWithWhereWithoutUsersInput } from './group-update-many-with-where-without-users.input';
import { GroupScalarWhereInput } from './group-scalar-where.input';

@InputType()
export class GroupUncheckedUpdateManyWithoutUsersNestedInput {

    @Field(() => [GroupCreateWithoutUsersInput], {nullable:true})
    @Type(() => GroupCreateWithoutUsersInput)
    create?: Array<GroupCreateWithoutUsersInput>;

    @Field(() => [GroupCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => GroupCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<GroupCreateOrConnectWithoutUsersInput>;

    @Field(() => [GroupUpsertWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => GroupUpsertWithWhereUniqueWithoutUsersInput)
    upsert?: Array<GroupUpsertWithWhereUniqueWithoutUsersInput>;

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

    @Field(() => [GroupUpdateWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => GroupUpdateWithWhereUniqueWithoutUsersInput)
    update?: Array<GroupUpdateWithWhereUniqueWithoutUsersInput>;

    @Field(() => [GroupUpdateManyWithWhereWithoutUsersInput], {nullable:true})
    @Type(() => GroupUpdateManyWithWhereWithoutUsersInput)
    updateMany?: Array<GroupUpdateManyWithWhereWithoutUsersInput>;

    @Field(() => [GroupScalarWhereInput], {nullable:true})
    @Type(() => GroupScalarWhereInput)
    deleteMany?: Array<GroupScalarWhereInput>;
}
