import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GradesOnDocsCountAggregate } from './grades-on-docs-count-aggregate.output';
import { GradesOnDocsAvgAggregate } from './grades-on-docs-avg-aggregate.output';
import { GradesOnDocsSumAggregate } from './grades-on-docs-sum-aggregate.output';
import { GradesOnDocsMinAggregate } from './grades-on-docs-min-aggregate.output';
import { GradesOnDocsMaxAggregate } from './grades-on-docs-max-aggregate.output';

@ObjectType()
export class GradesOnDocsGroupBy {

    @Field(() => Int, {nullable:false})
    docId!: number;

    @Field(() => Int, {nullable:false})
    gradeId!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => GradesOnDocsCountAggregate, {nullable:true})
    _count?: GradesOnDocsCountAggregate;

    @Field(() => GradesOnDocsAvgAggregate, {nullable:true})
    _avg?: GradesOnDocsAvgAggregate;

    @Field(() => GradesOnDocsSumAggregate, {nullable:true})
    _sum?: GradesOnDocsSumAggregate;

    @Field(() => GradesOnDocsMinAggregate, {nullable:true})
    _min?: GradesOnDocsMinAggregate;

    @Field(() => GradesOnDocsMaxAggregate, {nullable:true})
    _max?: GradesOnDocsMaxAggregate;
}
