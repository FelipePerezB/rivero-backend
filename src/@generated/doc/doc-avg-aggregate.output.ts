import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class DocAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    topicId?: number;

    @Field(() => Float, {nullable:true})
    userId?: number;

    @Field(() => Float, {nullable:true})
    subtopicId?: number;
}
