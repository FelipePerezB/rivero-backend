import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TopicCreateWithoutScoreInput } from './topic-create-without-score.input';
import { Type } from 'class-transformer';
import { TopicCreateOrConnectWithoutScoreInput } from './topic-create-or-connect-without-score.input';
import { TopicUpsertWithoutScoreInput } from './topic-upsert-without-score.input';
import { TopicWhereUniqueInput } from './topic-where-unique.input';
import { TopicUpdateWithoutScoreInput } from './topic-update-without-score.input';

@InputType()
export class TopicUpdateOneRequiredWithoutScoreNestedInput {

    @Field(() => TopicCreateWithoutScoreInput, {nullable:true})
    @Type(() => TopicCreateWithoutScoreInput)
    create?: TopicCreateWithoutScoreInput;

    @Field(() => TopicCreateOrConnectWithoutScoreInput, {nullable:true})
    @Type(() => TopicCreateOrConnectWithoutScoreInput)
    connectOrCreate?: TopicCreateOrConnectWithoutScoreInput;

    @Field(() => TopicUpsertWithoutScoreInput, {nullable:true})
    @Type(() => TopicUpsertWithoutScoreInput)
    upsert?: TopicUpsertWithoutScoreInput;

    @Field(() => TopicWhereUniqueInput, {nullable:true})
    @Type(() => TopicWhereUniqueInput)
    connect?: TopicWhereUniqueInput;

    @Field(() => TopicUpdateWithoutScoreInput, {nullable:true})
    @Type(() => TopicUpdateWithoutScoreInput)
    update?: TopicUpdateWithoutScoreInput;
}
