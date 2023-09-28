import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SubtopicCountAggregate } from './subtopic-count-aggregate.output';
import { SubtopicAvgAggregate } from './subtopic-avg-aggregate.output';
import { SubtopicSumAggregate } from './subtopic-sum-aggregate.output';
import { SubtopicMinAggregate } from './subtopic-min-aggregate.output';
import { SubtopicMaxAggregate } from './subtopic-max-aggregate.output';

@ObjectType()
export class SubtopicGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:true})
    subjectId?: number;

    @Field(() => Int, {nullable:false})
    topicId!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => SubtopicCountAggregate, {nullable:true})
    _count?: SubtopicCountAggregate;

    @Field(() => SubtopicAvgAggregate, {nullable:true})
    _avg?: SubtopicAvgAggregate;

    @Field(() => SubtopicSumAggregate, {nullable:true})
    _sum?: SubtopicSumAggregate;

    @Field(() => SubtopicMinAggregate, {nullable:true})
    _min?: SubtopicMinAggregate;

    @Field(() => SubtopicMaxAggregate, {nullable:true})
    _max?: SubtopicMaxAggregate;
}
