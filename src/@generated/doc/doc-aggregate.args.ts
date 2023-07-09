import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DocWhereInput } from './doc-where.input';
import { Type } from 'class-transformer';
import { DocOrderByWithRelationInput } from './doc-order-by-with-relation.input';
import { DocWhereUniqueInput } from './doc-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DocCountAggregateInput } from './doc-count-aggregate.input';
import { DocAvgAggregateInput } from './doc-avg-aggregate.input';
import { DocSumAggregateInput } from './doc-sum-aggregate.input';
import { DocMinAggregateInput } from './doc-min-aggregate.input';
import { DocMaxAggregateInput } from './doc-max-aggregate.input';

@ArgsType()
export class DocAggregateArgs {

    @Field(() => DocWhereInput, {nullable:true})
    @Type(() => DocWhereInput)
    where?: DocWhereInput;

    @Field(() => [DocOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DocOrderByWithRelationInput>;

    @Field(() => DocWhereUniqueInput, {nullable:true})
    cursor?: DocWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DocCountAggregateInput, {nullable:true})
    _count?: DocCountAggregateInput;

    @Field(() => DocAvgAggregateInput, {nullable:true})
    _avg?: DocAvgAggregateInput;

    @Field(() => DocSumAggregateInput, {nullable:true})
    _sum?: DocSumAggregateInput;

    @Field(() => DocMinAggregateInput, {nullable:true})
    _min?: DocMinAggregateInput;

    @Field(() => DocMaxAggregateInput, {nullable:true})
    _max?: DocMaxAggregateInput;
}
