import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    stars?: number;

    @Field(() => Int, {nullable:true})
    gradeId?: number;

    @Field(() => Int, {nullable:true})
    schoolId?: number;
}