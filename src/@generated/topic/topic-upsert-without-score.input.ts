import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TopicUpdateWithoutScoreInput } from './topic-update-without-score.input';
import { Type } from 'class-transformer';
import { TopicCreateWithoutScoreInput } from './topic-create-without-score.input';

@InputType()
export class TopicUpsertWithoutScoreInput {

    @Field(() => TopicUpdateWithoutScoreInput, {nullable:false})
    @Type(() => TopicUpdateWithoutScoreInput)
    update!: TopicUpdateWithoutScoreInput;

    @Field(() => TopicCreateWithoutScoreInput, {nullable:false})
    @Type(() => TopicCreateWithoutScoreInput)
    create!: TopicCreateWithoutScoreInput;
}
