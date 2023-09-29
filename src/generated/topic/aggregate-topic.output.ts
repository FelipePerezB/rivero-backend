import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TopicCountAggregate } from './topic-count-aggregate.output';
import { TopicAvgAggregate } from './topic-avg-aggregate.output';
import { TopicSumAggregate } from './topic-sum-aggregate.output';
import { TopicMinAggregate } from './topic-min-aggregate.output';
import { TopicMaxAggregate } from './topic-max-aggregate.output';

@ObjectType()
export class AggregateTopic {

    @Field(() => TopicCountAggregate, {nullable:true})
    _count?: TopicCountAggregate;

    @Field(() => TopicAvgAggregate, {nullable:true})
    _avg?: TopicAvgAggregate;

    @Field(() => TopicSumAggregate, {nullable:true})
    _sum?: TopicSumAggregate;

    @Field(() => TopicMinAggregate, {nullable:true})
    _min?: TopicMinAggregate;

    @Field(() => TopicMaxAggregate, {nullable:true})
    _max?: TopicMaxAggregate;
}
