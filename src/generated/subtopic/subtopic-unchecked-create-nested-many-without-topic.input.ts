import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubtopicCreateWithoutTopicInput } from './subtopic-create-without-topic.input';
import { Type } from 'class-transformer';
import { SubtopicCreateOrConnectWithoutTopicInput } from './subtopic-create-or-connect-without-topic.input';
import { SubtopicCreateManyTopicInputEnvelope } from './subtopic-create-many-topic-input-envelope.input';
import { SubtopicWhereUniqueInput } from './subtopic-where-unique.input';

@InputType()
export class SubtopicUncheckedCreateNestedManyWithoutTopicInput {

    @Field(() => [SubtopicCreateWithoutTopicInput], {nullable:true})
    @Type(() => SubtopicCreateWithoutTopicInput)
    create?: Array<SubtopicCreateWithoutTopicInput>;

    @Field(() => [SubtopicCreateOrConnectWithoutTopicInput], {nullable:true})
    @Type(() => SubtopicCreateOrConnectWithoutTopicInput)
    connectOrCreate?: Array<SubtopicCreateOrConnectWithoutTopicInput>;

    @Field(() => SubtopicCreateManyTopicInputEnvelope, {nullable:true})
    @Type(() => SubtopicCreateManyTopicInputEnvelope)
    createMany?: SubtopicCreateManyTopicInputEnvelope;

    @Field(() => [SubtopicWhereUniqueInput], {nullable:true})
    @Type(() => SubtopicWhereUniqueInput)
    connect?: Array<SubtopicWhereUniqueInput>;
}
