import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SubjectCount {

    @Field(() => Int, {nullable:false})
    topics?: number;

    @Field(() => Int, {nullable:false})
    Subtopic?: number;
}
