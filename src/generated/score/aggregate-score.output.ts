import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ScoreCountAggregate } from './score-count-aggregate.output';
import { ScoreAvgAggregate } from './score-avg-aggregate.output';
import { ScoreSumAggregate } from './score-sum-aggregate.output';
import { ScoreMinAggregate } from './score-min-aggregate.output';
import { ScoreMaxAggregate } from './score-max-aggregate.output';

@ObjectType()
export class AggregateScore {

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
