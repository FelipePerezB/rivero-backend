import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GradesOnSchoolsCountAggregate } from './grades-on-schools-count-aggregate.output';
import { GradesOnSchoolsAvgAggregate } from './grades-on-schools-avg-aggregate.output';
import { GradesOnSchoolsSumAggregate } from './grades-on-schools-sum-aggregate.output';
import { GradesOnSchoolsMinAggregate } from './grades-on-schools-min-aggregate.output';
import { GradesOnSchoolsMaxAggregate } from './grades-on-schools-max-aggregate.output';

@ObjectType()
export class GradesOnSchoolsGroupBy {

    @Field(() => Int, {nullable:false})
    gradeId!: number;

    @Field(() => Int, {nullable:false})
    schoolId!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => GradesOnSchoolsCountAggregate, {nullable:true})
    _count?: GradesOnSchoolsCountAggregate;

    @Field(() => GradesOnSchoolsAvgAggregate, {nullable:true})
    _avg?: GradesOnSchoolsAvgAggregate;

    @Field(() => GradesOnSchoolsSumAggregate, {nullable:true})
    _sum?: GradesOnSchoolsSumAggregate;

    @Field(() => GradesOnSchoolsMinAggregate, {nullable:true})
    _min?: GradesOnSchoolsMinAggregate;

    @Field(() => GradesOnSchoolsMaxAggregate, {nullable:true})
    _max?: GradesOnSchoolsMaxAggregate;
}
