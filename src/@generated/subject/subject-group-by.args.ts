import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubjectWhereInput } from './subject-where.input';
import { Type } from 'class-transformer';
import { SubjectOrderByWithAggregationInput } from './subject-order-by-with-aggregation.input';
import { SubjectScalarFieldEnum } from './subject-scalar-field.enum';
import { SubjectScalarWhereWithAggregatesInput } from './subject-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SubjectCountAggregateInput } from './subject-count-aggregate.input';
import { SubjectAvgAggregateInput } from './subject-avg-aggregate.input';
import { SubjectSumAggregateInput } from './subject-sum-aggregate.input';
import { SubjectMinAggregateInput } from './subject-min-aggregate.input';
import { SubjectMaxAggregateInput } from './subject-max-aggregate.input';

@ArgsType()
export class SubjectGroupByArgs {

    @Field(() => SubjectWhereInput, {nullable:true})
    @Type(() => SubjectWhereInput)
    where?: SubjectWhereInput;

    @Field(() => [SubjectOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SubjectOrderByWithAggregationInput>;

    @Field(() => [SubjectScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SubjectScalarFieldEnum>;

    @Field(() => SubjectScalarWhereWithAggregatesInput, {nullable:true})
    having?: SubjectScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SubjectCountAggregateInput, {nullable:true})
    _count?: SubjectCountAggregateInput;

    @Field(() => SubjectAvgAggregateInput, {nullable:true})
    _avg?: SubjectAvgAggregateInput;

    @Field(() => SubjectSumAggregateInput, {nullable:true})
    _sum?: SubjectSumAggregateInput;

    @Field(() => SubjectMinAggregateInput, {nullable:true})
    _min?: SubjectMinAggregateInput;

    @Field(() => SubjectMaxAggregateInput, {nullable:true})
    _max?: SubjectMaxAggregateInput;
}
