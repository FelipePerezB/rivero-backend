import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GradeWhereInput } from './grade-where.input';
import { Type } from 'class-transformer';
import { GradeOrderByWithRelationInput } from './grade-order-by-with-relation.input';
import { GradeWhereUniqueInput } from './grade-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GradeCountAggregateInput } from './grade-count-aggregate.input';
import { GradeAvgAggregateInput } from './grade-avg-aggregate.input';
import { GradeSumAggregateInput } from './grade-sum-aggregate.input';
import { GradeMinAggregateInput } from './grade-min-aggregate.input';
import { GradeMaxAggregateInput } from './grade-max-aggregate.input';

@ArgsType()
export class GradeAggregateArgs {

    @Field(() => GradeWhereInput, {nullable:true})
    @Type(() => GradeWhereInput)
    where?: GradeWhereInput;

    @Field(() => [GradeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GradeOrderByWithRelationInput>;

    @Field(() => GradeWhereUniqueInput, {nullable:true})
    cursor?: GradeWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => GradeCountAggregateInput, {nullable:true})
    _count?: GradeCountAggregateInput;

    @Field(() => GradeAvgAggregateInput, {nullable:true})
    _avg?: GradeAvgAggregateInput;

    @Field(() => GradeSumAggregateInput, {nullable:true})
    _sum?: GradeSumAggregateInput;

    @Field(() => GradeMinAggregateInput, {nullable:true})
    _min?: GradeMinAggregateInput;

    @Field(() => GradeMaxAggregateInput, {nullable:true})
    _max?: GradeMaxAggregateInput;
}
