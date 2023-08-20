import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TopicCreateWithoutSubtopicsInput } from './topic-create-without-subtopics.input';
import { Type } from 'class-transformer';
import { TopicCreateOrConnectWithoutSubtopicsInput } from './topic-create-or-connect-without-subtopics.input';
import { TopicUpsertWithoutSubtopicsInput } from './topic-upsert-without-subtopics.input';
import { TopicWhereUniqueInput } from './topic-where-unique.input';
import { TopicUpdateToOneWithWhereWithoutSubtopicsInput } from './topic-update-to-one-with-where-without-subtopics.input';

@InputType()
export class TopicUpdateOneRequiredWithoutSubtopicsNestedInput {

    @Field(() => TopicCreateWithoutSubtopicsInput, {nullable:true})
    @Type(() => TopicCreateWithoutSubtopicsInput)
    create?: TopicCreateWithoutSubtopicsInput;

    @Field(() => TopicCreateOrConnectWithoutSubtopicsInput, {nullable:true})
    @Type(() => TopicCreateOrConnectWithoutSubtopicsInput)
    connectOrCreate?: TopicCreateOrConnectWithoutSubtopicsInput;

    @Field(() => TopicUpsertWithoutSubtopicsInput, {nullable:true})
    @Type(() => TopicUpsertWithoutSubtopicsInput)
    upsert?: TopicUpsertWithoutSubtopicsInput;

    @Field(() => TopicWhereUniqueInput, {nullable:true})
    @Type(() => TopicWhereUniqueInput)
    connect?: TopicWhereUniqueInput;

    @Field(() => TopicUpdateToOneWithWhereWithoutSubtopicsInput, {nullable:true})
    @Type(() => TopicUpdateToOneWithWhereWithoutSubtopicsInput)
    update?: TopicUpdateToOneWithWhereWithoutSubtopicsInput;
}
