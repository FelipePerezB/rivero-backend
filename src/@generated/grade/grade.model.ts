import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { School } from '../school/school.model';
import { GradeCount } from './grade-count.output';

@ObjectType()
export class Grade {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt!: Date | null;

    @Field(() => Date, {nullable:true})
    updateAt!: Date | null;

    @Field(() => Int, {nullable:false})
    schoolId!: number;

    @Field(() => [User], {nullable:true})
    Users?: Array<User>;

    @Field(() => School, {nullable:false})
    School?: School;

    @Field(() => GradeCount, {nullable:false})
    _count?: GradeCount;
}
