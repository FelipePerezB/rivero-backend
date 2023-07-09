import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScoreWhereUniqueInput } from './score-where-unique.input';
import { Type } from 'class-transformer';
import { ScoreCreateWithoutTopicInput } from './score-create-without-topic.input';

@InputType()
export class ScoreCreateOrConnectWithoutTopicInput {

    @Field(() => ScoreWhereUniqueInput, {nullable:false})
    @Type(() => ScoreWhereUniqueInput)
    where!: ScoreWhereUniqueInput;

    @Field(() => ScoreCreateWithoutTopicInput, {nullable:false})
    @Type(() => ScoreCreateWithoutTopicInput)
    create!: ScoreCreateWithoutTopicInput;
}
