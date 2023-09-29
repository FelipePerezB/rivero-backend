import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Group } from '../group/group.model';
import { OrganizationCount } from './organization-count.output';

@ObjectType()
export class Organization {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt!: Date | null;

    @Field(() => Date, {nullable:true})
    updateAt!: Date | null;

    @Field(() => [User], {nullable:true})
    Users?: Array<User>;

    @Field(() => [Group], {nullable:true})
    Groups?: Array<Group>;

    @Field(() => OrganizationCount, {nullable:false})
    _count?: OrganizationCount;
}
