import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubjectsOnSchoolsWhereInput } from './subjects-on-schools-where.input';
import { Type } from 'class-transformer';
import { SubjectsOnSchoolsOrderByWithAggregationInput } from './subjects-on-schools-order-by-with-aggregation.input';
import { SubjectsOnSchoolsScalarFieldEnum } from './subjects-on-schools-scalar-field.enum';
import { SubjectsOnSchoolsScalarWhereWithAggregatesInput } from './subjects-on-schools-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SubjectsOnSchoolsCountAggregateInput } from './subjects-on-schools-count-aggregate.input';
import { SubjectsOnSchoolsAvgAggregateInput } from './subjects-on-schools-avg-aggregate.input';
import { SubjectsOnSchoolsSumAggregateInput } from './subjects-on-schools-sum-aggregate.input';
import { SubjectsOnSchoolsMinAggregateInput } from './subjects-on-schools-min-aggregate.input';
import { SubjectsOnSchoolsMaxAggregateInput } from './subjects-on-schools-max-aggregate.input';

@ArgsType()
export class SubjectsOnSchoolsGroupByArgs {

    @Field(() => SubjectsOnSchoolsWhereInput, {nullable:true})
    @Type(() => SubjectsOnSchoolsWhereInput)
    where?: SubjectsOnSchoolsWhereInput;

    @Field(() => [SubjectsOnSchoolsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SubjectsOnSchoolsOrderByWithAggregationInput>;

    @Field(() => [SubjectsOnSchoolsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SubjectsOnSchoolsScalarFieldEnum>;

    @Field(() => SubjectsOnSchoolsScalarWhereWithAggregatesInput, {nullable:true})
    having?: SubjectsOnSchoolsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SubjectsOnSchoolsCountAggregateInput, {nullable:true})
    _count?: SubjectsOnSchoolsCountAggregateInput;

    @Field(() => SubjectsOnSchoolsAvgAggregateInput, {nullable:true})
    _avg?: SubjectsOnSchoolsAvgAggregateInput;

    @Field(() => SubjectsOnSchoolsSumAggregateInput, {nullable:true})
    _sum?: SubjectsOnSchoolsSumAggregateInput;

    @Field(() => SubjectsOnSchoolsMinAggregateInput, {nullable:true})
    _min?: SubjectsOnSchoolsMinAggregateInput;

    @Field(() => SubjectsOnSchoolsMaxAggregateInput, {nullable:true})
    _max?: SubjectsOnSchoolsMaxAggregateInput;
}
