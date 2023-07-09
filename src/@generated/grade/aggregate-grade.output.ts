import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GradeCountAggregate } from './grade-count-aggregate.output';
import { GradeAvgAggregate } from './grade-avg-aggregate.output';
import { GradeSumAggregate } from './grade-sum-aggregate.output';
import { GradeMinAggregate } from './grade-min-aggregate.output';
import { GradeMaxAggregate } from './grade-max-aggregate.output';

@ObjectType()
export class AggregateGrade {

    @Field(() => GradeCountAggregate, {nullable:true})
    _count?: GradeCountAggregate;

    @Field(() => GradeAvgAggregate, {nullable:true})
    _avg?: GradeAvgAggregate;

    @Field(() => GradeSumAggregate, {nullable:true})
    _sum?: GradeSumAggregate;

    @Field(() => GradeMinAggregate, {nullable:true})
    _min?: GradeMinAggregate;

    @Field(() => GradeMaxAggregate, {nullable:true})
    _max?: GradeMaxAggregate;
}
