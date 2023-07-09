import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DocCountAggregate } from './doc-count-aggregate.output';
import { DocAvgAggregate } from './doc-avg-aggregate.output';
import { DocSumAggregate } from './doc-sum-aggregate.output';
import { DocMinAggregate } from './doc-min-aggregate.output';
import { DocMaxAggregate } from './doc-max-aggregate.output';

@ObjectType()
export class AggregateDoc {

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
