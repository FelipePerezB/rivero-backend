import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DocCount {

    @Field(() => Int, {nullable:false})
    grades?: number;

    @Field(() => Int, {nullable:false})
    Score?: number;
}