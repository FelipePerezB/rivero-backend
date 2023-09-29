import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TopicWhereInput } from './topic-where.input';
import { Type } from 'class-transformer';
import { TopicOrderByWithRelationInput } from './topic-order-by-with-relation.input';
import { TopicWhereUniqueInput } from './topic-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TopicCountAggregateInput } from './topic-count-aggregate.input';
import { TopicAvgAggregateInput } from './topic-avg-aggregate.input';
import { TopicSumAggregateInput } from './topic-sum-aggregate.input';
import { TopicMinAggregateInput } from './topic-min-aggregate.input';
import { TopicMaxAggregateInput } from './topic-max-aggregate.input';

@ArgsType()
export class TopicAggregateArgs {

    @Field(() => TopicWhereInput, {nullable:true})
    @Type(() => TopicWhereInput)
    where?: TopicWhereInput;

    @Field(() => [TopicOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TopicOrderByWithRelationInput>;

    @Field(() => TopicWhereUniqueInput, {nullable:true})
    cursor?: TopicWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => TopicCountAggregateInput, {nullable:true})
    _count?: TopicCountAggregateInput;

    @Field(() => TopicAvgAggregateInput, {nullable:true})
    _avg?: TopicAvgAggregateInput;

    @Field(() => TopicSumAggregateInput, {nullable:true})
    _sum?: TopicSumAggregateInput;

    @Field(() => TopicMinAggregateInput, {nullable:true})
    _min?: TopicMinAggregateInput;

    @Field(() => TopicMaxAggregateInput, {nullable:true})
    _max?: TopicMaxAggregateInput;
}
