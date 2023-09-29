import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SubjectCountAggregate } from './subject-count-aggregate.output';
import { SubjectAvgAggregate } from './subject-avg-aggregate.output';
import { SubjectSumAggregate } from './subject-sum-aggregate.output';
import { SubjectMinAggregate } from './subject-min-aggregate.output';
import { SubjectMaxAggregate } from './subject-max-aggregate.output';

@ObjectType()
export class AggregateSubject {

    @Field(() => SubjectCountAggregate, {nullable:true})
    _count?: SubjectCountAggregate;

    @Field(() => SubjectAvgAggregate, {nullable:true})
    _avg?: SubjectAvgAggregate;

    @Field(() => SubjectSumAggregate, {nullable:true})
    _sum?: SubjectSumAggregate;

    @Field(() => SubjectMinAggregate, {nullable:true})
    _min?: SubjectMinAggregate;

    @Field(() => SubjectMaxAggregate, {nullable:true})
    _max?: SubjectMaxAggregate;
}
