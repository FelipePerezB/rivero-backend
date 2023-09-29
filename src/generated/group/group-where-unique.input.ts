import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GroupWhereInput } from './group-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';
import { OrganizationRelationFilter } from '../organization/organization-relation-filter.input';

@InputType()
export class GroupWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [GroupWhereInput], {nullable:true})
    AND?: Array<GroupWhereInput>;

    @Field(() => [GroupWhereInput], {nullable:true})
    OR?: Array<GroupWhereInput>;

    @Field(() => [GroupWhereInput], {nullable:true})
    NOT?: Array<GroupWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    organizationId?: IntFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    createdAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updateAt?: DateTimeNullableFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    Users?: UserListRelationFilter;

    @Field(() => OrganizationRelationFilter, {nullable:true})
    Organization?: OrganizationRelationFilter;
}
