import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TopicCount {

    @Field(() => Int, {nullable:false})
    Docs?: number;

    @Field(() => Int, {nullable:false})
    Subtopics?: number;
}
