import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCount {

    @Field(() => Int, {nullable:false})
    Group?: number;

    @Field(() => Int, {nullable:false})
    Score?: number;

    @Field(() => Int, {nullable:false})
    File?: number;
}
