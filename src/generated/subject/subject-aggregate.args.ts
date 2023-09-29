import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubjectWhereInput } from './subject-where.input';
import { Type } from 'class-transformer';
import { SubjectOrderByWithRelationInput } from './subject-order-by-with-relation.input';
import { SubjectWhereUniqueInput } from './subject-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SubjectCountAggregateInput } from './subject-count-aggregate.input';
import { SubjectAvgAggregateInput } from './subject-avg-aggregate.input';
import { SubjectSumAggregateInput } from './subject-sum-aggregate.input';
import { SubjectMinAggregateInput } from './subject-min-aggregate.input';
import { SubjectMaxAggregateInput } from './subject-max-aggregate.input';

@ArgsType()
export class SubjectAggregateArgs {

    @Field(() => SubjectWhereInput, {nullable:true})
    @Type(() => SubjectWhereInput)
    where?: SubjectWhereInput;

    @Field(() => [SubjectOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SubjectOrderByWithRelationInput>;

    @Field(() => SubjectWhereUniqueInput, {nullable:true})
    cursor?: SubjectWhereUniqueInput;

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
