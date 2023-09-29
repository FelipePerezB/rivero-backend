import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubtopicWhereInput } from '../subtopic/subtopic-where.input';
import { Type } from 'class-transformer';
import { SubtopicOrderByWithAggregationInput } from '../subtopic/subtopic-order-by-with-aggregation.input';
import { SubtopicScalarFieldEnum } from '../subtopic/subtopic-scalar-field.enum';
import { SubtopicScalarWhereWithAggregatesInput } from '../subtopic/subtopic-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBySubtopicArgs {

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
}
