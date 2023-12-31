import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ScoreCountAggregate } from './score-count-aggregate.output';
import { ScoreAvgAggregate } from './score-avg-aggregate.output';
import { ScoreSumAggregate } from './score-sum-aggregate.output';
import { ScoreMinAggregate } from './score-min-aggregate.output';
import { ScoreMaxAggregate } from './score-max-aggregate.output';

@ObjectType()
export class ScoreGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    score!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => String, {nullable:false})
    alternatives!: string;

    @Field(() => Int, {nullable:true})
    noteId?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => ScoreCountAggregate, {nullable:true})
    _count?: ScoreCountAggregate;

    @Field(() => ScoreAvgAggregate, {nullable:true})
    _avg?: ScoreAvgAggregate;

    @Field(() => ScoreSumAggregate, {nullable:true})
    _sum?: ScoreSumAggregate;

    @Field(() => ScoreMinAggregate, {nullable:true})
    _min?: ScoreMinAggregate;

    @Field(() => ScoreMaxAggregate, {nullable:true})
    _max?: ScoreMaxAggregate;
}
