import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScoreCreateWithoutTopicInput } from './score-create-without-topic.input';
import { Type } from 'class-transformer';
import { ScoreCreateOrConnectWithoutTopicInput } from './score-create-or-connect-without-topic.input';
import { ScoreUpsertWithWhereUniqueWithoutTopicInput } from './score-upsert-with-where-unique-without-topic.input';
import { ScoreCreateManyTopicInputEnvelope } from './score-create-many-topic-input-envelope.input';
import { ScoreWhereUniqueInput } from './score-where-unique.input';
import { ScoreUpdateWithWhereUniqueWithoutTopicInput } from './score-update-with-where-unique-without-topic.input';
import { ScoreUpdateManyWithWhereWithoutTopicInput } from './score-update-many-with-where-without-topic.input';
import { ScoreScalarWhereInput } from './score-scalar-where.input';

@InputType()
export class ScoreUpdateManyWithoutTopicNestedInput {

    @Field(() => [ScoreCreateWithoutTopicInput], {nullable:true})
    @Type(() => ScoreCreateWithoutTopicInput)
    create?: Array<ScoreCreateWithoutTopicInput>;

    @Field(() => [ScoreCreateOrConnectWithoutTopicInput], {nullable:true})
    @Type(() => ScoreCreateOrConnectWithoutTopicInput)
    connectOrCreate?: Array<ScoreCreateOrConnectWithoutTopicInput>;

    @Field(() => [ScoreUpsertWithWhereUniqueWithoutTopicInput], {nullable:true})
    @Type(() => ScoreUpsertWithWhereUniqueWithoutTopicInput)
    upsert?: Array<ScoreUpsertWithWhereUniqueWithoutTopicInput>;

    @Field(() => ScoreCreateManyTopicInputEnvelope, {nullable:true})
    @Type(() => ScoreCreateManyTopicInputEnvelope)
    createMany?: ScoreCreateManyTopicInputEnvelope;

    @Field(() => [ScoreWhereUniqueInput], {nullable:true})
    @Type(() => ScoreWhereUniqueInput)
    set?: Array<ScoreWhereUniqueInput>;

    @Field(() => [ScoreWhereUniqueInput], {nullable:true})
    @Type(() => ScoreWhereUniqueInput)
    disconnect?: Array<ScoreWhereUniqueInput>;

    @Field(() => [ScoreWhereUniqueInput], {nullable:true})
    @Type(() => ScoreWhereUniqueInput)
    delete?: Array<ScoreWhereUniqueInput>;

    @Field(() => [ScoreWhereUniqueInput], {nullable:true})
    @Type(() => ScoreWhereUniqueInput)
    connect?: Array<ScoreWhereUniqueInput>;

    @Field(() => [ScoreUpdateWithWhereUniqueWithoutTopicInput], {nullable:true})
    @Type(() => ScoreUpdateWithWhereUniqueWithoutTopicInput)
    update?: Array<ScoreUpdateWithWhereUniqueWithoutTopicInput>;

    @Field(() => [ScoreUpdateManyWithWhereWithoutTopicInput], {nullable:true})
    @Type(() => ScoreUpdateManyWithWhereWithoutTopicInput)
    updateMany?: Array<ScoreUpdateManyWithWhereWithoutTopicInput>;

    @Field(() => [ScoreScalarWhereInput], {nullable:true})
    @Type(() => ScoreScalarWhereInput)
    deleteMany?: Array<ScoreScalarWhereInput>;
}
