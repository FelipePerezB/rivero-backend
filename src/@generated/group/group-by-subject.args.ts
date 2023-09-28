import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubjectWhereInput } from '../subject/subject-where.input';
import { Type } from 'class-transformer';
import { SubjectOrderByWithAggregationInput } from '../subject/subject-order-by-with-aggregation.input';
import { SubjectScalarFieldEnum } from '../subject/subject-scalar-field.enum';
import { SubjectScalarWhereWithAggregatesInput } from '../subject/subject-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBySubjectArgs {

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
}
