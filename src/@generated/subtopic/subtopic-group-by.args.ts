import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubtopicWhereInput } from './subtopic-where.input';
import { Type } from 'class-transformer';
import { SubtopicOrderByWithAggregationInput } from './subtopic-order-by-with-aggregation.input';
import { SubtopicScalarFieldEnum } from './subtopic-scalar-field.enum';
import { SubtopicScalarWhereWithAggregatesInput } from './subtopic-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SubtopicCountAggregateInput } from './subtopic-count-aggregate.input';
import { SubtopicAvgAggregateInput } from './subtopic-avg-aggregate.input';
import { SubtopicSumAggregateInput } from './subtopic-sum-aggregate.input';
import { SubtopicMinAggregateInput } from './subtopic-min-aggregate.input';
import { SubtopicMaxAggregateInput } from './subtopic-max-aggregate.input';

@ArgsType()
export class SubtopicGroupByArgs {

    @Field(() => SubtopicWhereInput, {nullable:true})
    @Type(() => SubtopicWhereInput)
    where?: SubtopicWhereInput;

    @Field(() => [SubtopicOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SubtopicOrderByWithAggregationInput>;

    @Field(() => [SubtopicScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SubtopicScalarFieldEnum>;

    @Field(() => SubtopicScalarWhereWithAggregatesInput, {nullable:true})
    having?: SubtopicScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SubtopicCountAggregateInput, {nullable:true})
    _count?: SubtopicCountAggregateInput;

    @Field(() => SubtopicAvgAggregateInput, {nullable:true})
    _avg?: SubtopicAvgAggregateInput;

    @Field(() => SubtopicSumAggregateInput, {nullable:true})
    _sum?: SubtopicSumAggregateInput;

    @Field(() => SubtopicMinAggregateInput, {nullable:true})
    _min?: SubtopicMinAggregateInput;

    @Field(() => SubtopicMaxAggregateInput, {nullable:true})
    _max?: SubtopicMaxAggregateInput;
}
