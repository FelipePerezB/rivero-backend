import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ScoreCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    score!: number;

    @Field(() => Int, {nullable:false})
    subjectId!: number;

    @Field(() => Int, {nullable:false})
    topicId!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    correct!: number;

    @Field(() => Int, {nullable:false})
    total!: number;

    @Field(() => Int, {nullable:false})
    wrong!: number;

    @Field(() => Int, {nullable:false})
    null!: number;

    @Field(() => Int, {nullable:false})
    docId!: number;

    @Field(() => Int, {nullable:false})
    alternatives!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updateAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
