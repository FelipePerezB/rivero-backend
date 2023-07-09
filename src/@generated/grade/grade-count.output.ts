import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class GradeCount {

    @Field(() => Int, {nullable:false})
    users?: number;

    @Field(() => Int, {nullable:false})
    docs?: number;

    @Field(() => Int, {nullable:false})
    schools?: number;
}
