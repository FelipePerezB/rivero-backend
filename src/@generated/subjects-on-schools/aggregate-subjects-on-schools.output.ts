import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SubjectsOnSchoolsCountAggregate } from './subjects-on-schools-count-aggregate.output';
import { SubjectsOnSchoolsAvgAggregate } from './subjects-on-schools-avg-aggregate.output';
import { SubjectsOnSchoolsSumAggregate } from './subjects-on-schools-sum-aggregate.output';
import { SubjectsOnSchoolsMinAggregate } from './subjects-on-schools-min-aggregate.output';
import { SubjectsOnSchoolsMaxAggregate } from './subjects-on-schools-max-aggregate.output';

@ObjectType()
export class AggregateSubjectsOnSchools {

    @Field(() => SubjectsOnSchoolsCountAggregate, {nullable:true})
    _count?: SubjectsOnSchoolsCountAggregate;

    @Field(() => SubjectsOnSchoolsAvgAggregate, {nullable:true})
    _avg?: SubjectsOnSchoolsAvgAggregate;

    @Field(() => SubjectsOnSchoolsSumAggregate, {nullable:true})
    _sum?: SubjectsOnSchoolsSumAggregate;

    @Field(() => SubjectsOnSchoolsMinAggregate, {nullable:true})
    _min?: SubjectsOnSchoolsMinAggregate;

    @Field(() => SubjectsOnSchoolsMaxAggregate, {nullable:true})
    _max?: SubjectsOnSchoolsMaxAggregate;
}
