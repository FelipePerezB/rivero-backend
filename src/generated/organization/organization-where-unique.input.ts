import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { OrganizationWhereInput } from './organization-where.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';
import { GroupListRelationFilter } from '../group/group-list-relation-filter.input';

@InputType()
export class OrganizationWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => [OrganizationWhereInput], {nullable:true})
    AND?: Array<OrganizationWhereInput>;

    @Field(() => [OrganizationWhereInput], {nullable:true})
    OR?: Array<OrganizationWhereInput>;

    @Field(() => [OrganizationWhereInput], {nullable:true})
    NOT?: Array<OrganizationWhereInput>;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    createdAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updateAt?: DateTimeNullableFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    Users?: UserListRelationFilter;

    @Field(() => GroupListRelationFilter, {nullable:true})
    Groups?: GroupListRelationFilter;
}
