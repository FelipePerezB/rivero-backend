import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubjectsOnSchoolsWhereInput } from './subjects-on-schools-where.input';
import { Type } from 'class-transformer';
import { SubjectsOnSchoolsOrderByWithRelationInput } from './subjects-on-schools-order-by-with-relation.input';
import { SubjectsOnSchoolsWhereUniqueInput } from './subjects-on-schools-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SubjectsOnSchoolsCountAggregateInput } from './subjects-on-schools-count-aggregate.input';
import { SubjectsOnSchoolsAvgAggregateInput } from './subjects-on-schools-avg-aggregate.input';
import { SubjectsOnSchoolsSumAggregateInput } from './subjects-on-schools-sum-aggregate.input';
import { SubjectsOnSchoolsMinAggregateInput } from './subjects-on-schools-min-aggregate.input';
import { SubjectsOnSchoolsMaxAggregateInput } from './subjects-on-schools-max-aggregate.input';

@ArgsType()
export class SubjectsOnSchoolsAggregateArgs {

    @Field(() => SubjectsOnSchoolsWhereInput, {nullable:true})
    @Type(() => SubjectsOnSchoolsWhereInput)
    where?: SubjectsOnSchoolsWhereInput;

    @Field(() => [SubjectsOnSchoolsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SubjectsOnSchoolsOrderByWithRelationInput>;

    @Field(() => SubjectsOnSchoolsWhereUniqueInput, {nullable:true})
    cursor?: SubjectsOnSchoolsWhereUniqueInput;

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
