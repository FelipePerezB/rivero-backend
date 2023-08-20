import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubtopicWhereInput } from './subtopic-where.input';
import { Type } from 'class-transformer';
import { SubtopicOrderByWithRelationInput } from './subtopic-order-by-with-relation.input';
import { SubtopicWhereUniqueInput } from './subtopic-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SubtopicCountAggregateInput } from './subtopic-count-aggregate.input';
import { SubtopicAvgAggregateInput } from './subtopic-avg-aggregate.input';
import { SubtopicSumAggregateInput } from './subtopic-sum-aggregate.input';
import { SubtopicMinAggregateInput } from './subtopic-min-aggregate.input';
import { SubtopicMaxAggregateInput } from './subtopic-max-aggregate.input';

@ArgsType()
export class SubtopicAggregateArgs {

    @Field(() => SubtopicWhereInput, {nullable:true})
    @Type(() => SubtopicWhereInput)
    where?: SubtopicWhereInput;

    @Field(() => [SubtopicOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SubtopicOrderByWithRelationInput>;

    @Field(() => SubtopicWhereUniqueInput, {nullable:true})
    cursor?: SubtopicWhereUniqueInput;

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
