import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TopicCreateWithoutSubtopicInput } from './topic-create-without-subtopic.input';
import { Type } from 'class-transformer';
import { TopicCreateOrConnectWithoutSubtopicInput } from './topic-create-or-connect-without-subtopic.input';
import { TopicUpsertWithoutSubtopicInput } from './topic-upsert-without-subtopic.input';
import { TopicWhereUniqueInput } from './topic-where-unique.input';
import { TopicUpdateToOneWithWhereWithoutSubtopicInput } from './topic-update-to-one-with-where-without-subtopic.input';

@InputType()
export class TopicUpdateOneRequiredWithoutSubtopicNestedInput {

    @Field(() => TopicCreateWithoutSubtopicInput, {nullable:true})
    @Type(() => TopicCreateWithoutSubtopicInput)
    create?: TopicCreateWithoutSubtopicInput;

    @Field(() => TopicCreateOrConnectWithoutSubtopicInput, {nullable:true})
    @Type(() => TopicCreateOrConnectWithoutSubtopicInput)
    connectOrCreate?: TopicCreateOrConnectWithoutSubtopicInput;

    @Field(() => TopicUpsertWithoutSubtopicInput, {nullable:true})
    @Type(() => TopicUpsertWithoutSubtopicInput)
    upsert?: TopicUpsertWithoutSubtopicInput;

    @Field(() => TopicWhereUniqueInput, {nullable:true})
    @Type(() => TopicWhereUniqueInput)
    connect?: TopicWhereUniqueInput;

    @Field(() => TopicUpdateToOneWithWhereWithoutSubtopicInput, {nullable:true})
    @Type(() => TopicUpdateToOneWithWhereWithoutSubtopicInput)
    update?: TopicUpdateToOneWithWhereWithoutSubtopicInput;
}
