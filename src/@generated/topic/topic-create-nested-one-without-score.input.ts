import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TopicCreateWithoutScoreInput } from './topic-create-without-score.input';
import { Type } from 'class-transformer';
import { TopicCreateOrConnectWithoutScoreInput } from './topic-create-or-connect-without-score.input';
import { TopicWhereUniqueInput } from './topic-where-unique.input';

@InputType()
export class TopicCreateNestedOneWithoutScoreInput {

    @Field(() => TopicCreateWithoutScoreInput, {nullable:true})
    @Type(() => TopicCreateWithoutScoreInput)
    create?: TopicCreateWithoutScoreInput;

    @Field(() => TopicCreateOrConnectWithoutScoreInput, {nullable:true})
    @Type(() => TopicCreateOrConnectWithoutScoreInput)
    connectOrCreate?: TopicCreateOrConnectWithoutScoreInput;

    @Field(() => TopicWhereUniqueInput, {nullable:true})
    @Type(() => TopicWhereUniqueInput)
    connect?: TopicWhereUniqueInput;
}
