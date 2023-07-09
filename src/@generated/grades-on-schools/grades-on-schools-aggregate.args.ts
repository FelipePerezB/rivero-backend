import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GradesOnSchoolsWhereInput } from './grades-on-schools-where.input';
import { Type } from 'class-transformer';
import { GradesOnSchoolsOrderByWithRelationInput } from './grades-on-schools-order-by-with-relation.input';
import { GradesOnSchoolsWhereUniqueInput } from './grades-on-schools-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GradesOnSchoolsCountAggregateInput } from './grades-on-schools-count-aggregate.input';
import { GradesOnSchoolsAvgAggregateInput } from './grades-on-schools-avg-aggregate.input';
import { GradesOnSchoolsSumAggregateInput } from './grades-on-schools-sum-aggregate.input';
import { GradesOnSchoolsMinAggregateInput } from './grades-on-schools-min-aggregate.input';
import { GradesOnSchoolsMaxAggregateInput } from './grades-on-schools-max-aggregate.input';

@ArgsType()
export class GradesOnSchoolsAggregateArgs {

    @Field(() => GradesOnSchoolsWhereInput, {nullable:true})
    @Type(() => GradesOnSchoolsWhereInput)
    where?: GradesOnSchoolsWhereInput;

    @Field(() => [GradesOnSchoolsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GradesOnSchoolsOrderByWithRelationInput>;

    @Field(() => GradesOnSchoolsWhereUniqueInput, {nullable:true})
    cursor?: GradesOnSchoolsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => GradesOnSchoolsCountAggregateInput, {nullable:true})
    _count?: GradesOnSchoolsCountAggregateInput;

    @Field(() => GradesOnSchoolsAvgAggregateInput, {nullable:true})
    _avg?: GradesOnSchoolsAvgAggregateInput;

    @Field(() => GradesOnSchoolsSumAggregateInput, {nullable:true})
    _sum?: GradesOnSchoolsSumAggregateInput;

    @Field(() => GradesOnSchoolsMinAggregateInput, {nullable:true})
    _min?: GradesOnSchoolsMinAggregateInput;

    @Field(() => GradesOnSchoolsMaxAggregateInput, {nullable:true})
    _max?: GradesOnSchoolsMaxAggregateInput;
}
