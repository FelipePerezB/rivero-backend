import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DocWhereInput } from './doc-where.input';
import { Type } from 'class-transformer';
import { DocOrderByWithAggregationInput } from './doc-order-by-with-aggregation.input';
import { DocScalarFieldEnum } from './doc-scalar-field.enum';
import { DocScalarWhereWithAggregatesInput } from './doc-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DocCountAggregateInput } from './doc-count-aggregate.input';
import { DocAvgAggregateInput } from './doc-avg-aggregate.input';
import { DocSumAggregateInput } from './doc-sum-aggregate.input';
import { DocMinAggregateInput } from './doc-min-aggregate.input';
import { DocMaxAggregateInput } from './doc-max-aggregate.input';

@ArgsType()
export class DocGroupByArgs {

    @Field(() => DocWhereInput, {nullable:true})
    @Type(() => DocWhereInput)
    where?: DocWhereInput;

    @Field(() => [DocOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DocOrderByWithAggregationInput>;

    @Field(() => [DocScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DocScalarFieldEnum>;

    @Field(() => DocScalarWhereWithAggregatesInput, {nullable:true})
    having?: DocScalarWhereWithAggregatesInput;

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
