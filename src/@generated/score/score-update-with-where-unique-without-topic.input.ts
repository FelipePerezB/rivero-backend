import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScoreWhereUniqueInput } from './score-where-unique.input';
import { Type } from 'class-transformer';
import { ScoreUpdateWithoutTopicInput } from './score-update-without-topic.input';

@InputType()
export class ScoreUpdateWithWhereUniqueWithoutTopicInput {

    @Field(() => ScoreWhereUniqueInput, {nullable:false})
    @Type(() => ScoreWhereUniqueInput)
    where!: ScoreWhereUniqueInput;

    @Field(() => ScoreUpdateWithoutTopicInput, {nullable:false})
    @Type(() => ScoreUpdateWithoutTopicInput)
    data!: ScoreUpdateWithoutTopicInput;
}
