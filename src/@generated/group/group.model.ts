import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Organization } from '../organization/organization.model';
import { GroupCount } from './group-count.output';

@ObjectType()
export class Group {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    organizationId!: number;

    @Field(() => Date, {nullable:true})
    createdAt!: Date | null;

    @Field(() => Date, {nullable:true})
    updateAt!: Date | null;

    @Field(() => [User], {nullable:true})
    Users?: Array<User>;

    @Field(() => Organization, {nullable:false})
    Organization?: Organization;

    @Field(() => GroupCount, {nullable:false})
    _count?: GroupCount;
}
