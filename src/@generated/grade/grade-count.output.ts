import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class GradeCount {

    @Field(() => Int, {nullable:false})
    Users?: number;

    @Field(() => Int, {nullable:false})
    Schools?: number;
}
