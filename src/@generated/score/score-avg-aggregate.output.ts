import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ScoreAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    score?: number;

    @Field(() => Float, {nullable:true})
    subjectId?: number;

    @Field(() => Float, {nullable:true})
    topicId?: number;

    @Field(() => Float, {nullable:true})
    userId?: number;

    @Field(() => Float, {nullable:true})
    correct?: number;

    @Field(() => Float, {nullable:true})
    total?: number;

    @Field(() => Float, {nullable:true})
    wrong?: number;

    @Field(() => Float, {nullable:true})
    null?: number;

    @Field(() => Float, {nullable:true})
    docId?: number;
}
