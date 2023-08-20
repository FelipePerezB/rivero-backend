import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Privacity } from '../prisma/privacity.enum';
import { DocTypes } from '../prisma/doc-types.enum';
import { DocCountAggregate } from './doc-count-aggregate.output';
import { DocAvgAggregate } from './doc-avg-aggregate.output';
import { DocSumAggregate } from './doc-sum-aggregate.output';
import { DocMinAggregate } from './doc-min-aggregate.output';
import { DocMaxAggregate } from './doc-max-aggregate.output';

@ObjectType()
export class DocGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Privacity, {nullable:false})
    privacity!: keyof typeof Privacity;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => DocTypes, {nullable:false})
    type!: keyof typeof DocTypes;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Int, {nullable:false})
    topicId!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => Int, {nullable:true})
    subtopicId?: number;

    @Field(() => DocCountAggregate, {nullable:true})
    _count?: DocCountAggregate;

    @Field(() => DocAvgAggregate, {nullable:true})
    _avg?: DocAvgAggregate;

    @Field(() => DocSumAggregate, {nullable:true})
    _sum?: DocSumAggregate;

    @Field(() => DocMinAggregate, {nullable:true})
    _min?: DocMinAggregate;

    @Field(() => DocMaxAggregate, {nullable:true})
    _max?: DocMaxAggregate;
}
