import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScoreCreateWithoutTopicInput } from './score-create-without-topic.input';
import { Type } from 'class-transformer';
import { ScoreCreateOrConnectWithoutTopicInput } from './score-create-or-connect-without-topic.input';
import { ScoreCreateManyTopicInputEnvelope } from './score-create-many-topic-input-envelope.input';
import { ScoreWhereUniqueInput } from './score-where-unique.input';

@InputType()
export class ScoreCreateNestedManyWithoutTopicInput {

    @Field(() => [ScoreCreateWithoutTopicInput], {nullable:true})
    @Type(() => ScoreCreateWithoutTopicInput)
    create?: Array<ScoreCreateWithoutTopicInput>;

    @Field(() => [ScoreCreateOrConnectWithoutTopicInput], {nullable:true})
    @Type(() => ScoreCreateOrConnectWithoutTopicInput)
    connectOrCreate?: Array<ScoreCreateOrConnectWithoutTopicInput>;

    @Field(() => ScoreCreateManyTopicInputEnvelope, {nullable:true})
    @Type(() => ScoreCreateManyTopicInputEnvelope)
    createMany?: ScoreCreateManyTopicInputEnvelope;

    @Field(() => [ScoreWhereUniqueInput], {nullable:true})
    @Type(() => ScoreWhereUniqueInput)
    connect?: Array<ScoreWhereUniqueInput>;
}
