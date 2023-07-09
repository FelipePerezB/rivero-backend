import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TopicWhereUniqueInput } from './topic-where-unique.input';
import { Type } from 'class-transformer';
import { TopicCreateWithoutScoreInput } from './topic-create-without-score.input';

@InputType()
export class TopicCreateOrConnectWithoutScoreInput {

    @Field(() => TopicWhereUniqueInput, {nullable:false})
    @Type(() => TopicWhereUniqueInput)
    where!: TopicWhereUniqueInput;

    @Field(() => TopicCreateWithoutScoreInput, {nullable:false})
    @Type(() => TopicCreateWithoutScoreInput)
    create!: TopicCreateWithoutScoreInput;
}
