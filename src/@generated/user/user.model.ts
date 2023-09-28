import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { Int } from '@nestjs/graphql';
import { Group } from '../group/group.model';
import { Organization } from '../organization/organization.model';
import { Score } from '../score/score.model';
import { File } from '../file/file.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    externalId!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    lastname!: string;

    @Field(() => Role, {nullable:false})
    role!: keyof typeof Role;

    @Field(() => Int, {nullable:false})
    groupId!: number;

    @Field(() => Int, {nullable:false})
    organizationId!: number;

    @Field(() => Date, {nullable:true})
    createdAt!: Date | null;

    @Field(() => Date, {nullable:true})
    updateAt!: Date | null;

    @Field(() => Group, {nullable:false})
    Group?: Group;

    @Field(() => Organization, {nullable:false})
    Organization?: Organization;

    @Field(() => [Score], {nullable:true})
    Score?: Array<Score>;

    @Field(() => [File], {nullable:true})
    File?: Array<File>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
