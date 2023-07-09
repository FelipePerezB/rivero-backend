import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ScoreSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    score?: number;

    @Field(() => Int, {nullable:true})
    subjectId?: number;

    @Field(() => Int, {nullable:true})
    topicId?: number;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => Int, {nullable:true})
    correct?: number;

    @Field(() => Int, {nullable:true})
    total?: number;

    @Field(() => Int, {nullable:true})
    wrong?: number;

    @Field(() => Int, {nullable:true})
    null?: number;

    @Field(() => Int, {nullable:true})
    docId?: number;
}
