import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GradesOnDocsWhereInput } from './grades-on-docs-where.input';
import { Type } from 'class-transformer';
import { GradesOnDocsOrderByWithAggregationInput } from './grades-on-docs-order-by-with-aggregation.input';
import { GradesOnDocsScalarFieldEnum } from './grades-on-docs-scalar-field.enum';
import { GradesOnDocsScalarWhereWithAggregatesInput } from './grades-on-docs-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { GradesOnDocsCountAggregateInput } from './grades-on-docs-count-aggregate.input';
import { GradesOnDocsAvgAggregateInput } from './grades-on-docs-avg-aggregate.input';
import { GradesOnDocsSumAggregateInput } from './grades-on-docs-sum-aggregate.input';
import { GradesOnDocsMinAggregateInput } from './grades-on-docs-min-aggregate.input';
import { GradesOnDocsMaxAggregateInput } from './grades-on-docs-max-aggregate.input';

@ArgsType()
export class GradesOnDocsGroupByArgs {

    @Field(() => GradesOnDocsWhereInput, {nullable:true})
    @Type(() => GradesOnDocsWhereInput)
    where?: GradesOnDocsWhereInput;

    @Field(() => [GradesOnDocsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<GradesOnDocsOrderByWithAggregationInput>;

    @Field(() => [GradesOnDocsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof GradesOnDocsScalarFieldEnum>;

    @Field(() => GradesOnDocsScalarWhereWithAggregatesInput, {nullable:true})
    having?: GradesOnDocsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => GradesOnDocsCountAggregateInput, {nullable:true})
    _count?: GradesOnDocsCountAggregateInput;

    @Field(() => GradesOnDocsAvgAggregateInput, {nullable:true})
    _avg?: GradesOnDocsAvgAggregateInput;

    @Field(() => GradesOnDocsSumAggregateInput, {nullable:true})
    _sum?: GradesOnDocsSumAggregateInput;

    @Field(() => GradesOnDocsMinAggregateInput, {nullable:true})
    _min?: GradesOnDocsMinAggregateInput;

    @Field(() => GradesOnDocsMaxAggregateInput, {nullable:true})
    _max?: GradesOnDocsMaxAggregateInput;
}
