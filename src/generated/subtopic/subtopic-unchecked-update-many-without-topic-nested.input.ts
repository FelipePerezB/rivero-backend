import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubtopicCreateWithoutTopicInput } from './subtopic-create-without-topic.input';
import { Type } from 'class-transformer';
import { SubtopicCreateOrConnectWithoutTopicInput } from './subtopic-create-or-connect-without-topic.input';
import { SubtopicUpsertWithWhereUniqueWithoutTopicInput } from './subtopic-upsert-with-where-unique-without-topic.input';
import { SubtopicCreateManyTopicInputEnvelope } from './subtopic-create-many-topic-input-envelope.input';
import { SubtopicWhereUniqueInput } from './subtopic-where-unique.input';
import { SubtopicUpdateWithWhereUniqueWithoutTopicInput } from './subtopic-update-with-where-unique-without-topic.input';
import { SubtopicUpdateManyWithWhereWithoutTopicInput } from './subtopic-update-many-with-where-without-topic.input';
import { SubtopicScalarWhereInput } from './subtopic-scalar-where.input';

@InputType()
export class SubtopicUncheckedUpdateManyWithoutTopicNestedInput {

    @Field(() => [SubtopicCreateWithoutTopicInput], {nullable:true})
    @Type(() => SubtopicCreateWithoutTopicInput)
    create?: Array<SubtopicCreateWithoutTopicInput>;

    @Field(() => [SubtopicCreateOrConnectWithoutTopicInput], {nullable:true})
    @Type(() => SubtopicCreateOrConnectWithoutTopicInput)
    connectOrCreate?: Array<SubtopicCreateOrConnectWithoutTopicInput>;

    @Field(() => [SubtopicUpsertWithWhereUniqueWithoutTopicInput], {nullable:true})
    @Type(() => SubtopicUpsertWithWhereUniqueWithoutTopicInput)
    upsert?: Array<SubtopicUpsertWithWhereUniqueWithoutTopicInput>;

    @Field(() => SubtopicCreateManyTopicInputEnvelope, {nullable:true})
    @Type(() => SubtopicCreateManyTopicInputEnvelope)
    createMany?: SubtopicCreateManyTopicInputEnvelope;

    @Field(() => [SubtopicWhereUniqueInput], {nullable:true})
    @Type(() => SubtopicWhereUniqueInput)
    set?: Array<SubtopicWhereUniqueInput>;

    @Field(() => [SubtopicWhereUniqueInput], {nullable:true})
    @Type(() => SubtopicWhereUniqueInput)
    disconnect?: Array<SubtopicWhereUniqueInput>;

    @Field(() => [SubtopicWhereUniqueInput], {nullable:true})
    @Type(() => SubtopicWhereUniqueInput)
    delete?: Array<SubtopicWhereUniqueInput>;

    @Field(() => [SubtopicWhereUniqueInput], {nullable:true})
    @Type(() => SubtopicWhereUniqueInput)
    connect?: Array<SubtopicWhereUniqueInput>;

    @Field(() => [SubtopicUpdateWithWhereUniqueWithoutTopicInput], {nullable:true})
    @Type(() => SubtopicUpdateWithWhereUniqueWithoutTopicInput)
    update?: Array<SubtopicUpdateWithWhereUniqueWithoutTopicInput>;

    @Field(() => [SubtopicUpdateManyWithWhereWithoutTopicInput], {nullable:true})
    @Type(() => SubtopicUpdateManyWithWhereWithoutTopicInput)
    updateMany?: Array<SubtopicUpdateManyWithWhereWithoutTopicInput>;

    @Field(() => [SubtopicScalarWhereInput], {nullable:true})
    @Type(() => SubtopicScalarWhereInput)
    deleteMany?: Array<SubtopicScalarWhereInput>;
}
