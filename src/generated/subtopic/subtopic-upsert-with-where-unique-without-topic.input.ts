import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubtopicWhereUniqueInput } from './subtopic-where-unique.input';
import { Type } from 'class-transformer';
import { SubtopicUpdateWithoutTopicInput } from './subtopic-update-without-topic.input';
import { SubtopicCreateWithoutTopicInput } from './subtopic-create-without-topic.input';

@InputType()
export class SubtopicUpsertWithWhereUniqueWithoutTopicInput {

    @Field(() => SubtopicWhereUniqueInput, {nullable:false})
    @Type(() => SubtopicWhereUniqueInput)
    where!: SubtopicWhereUniqueInput;

    @Field(() => SubtopicUpdateWithoutTopicInput, {nullable:false})
    @Type(() => SubtopicUpdateWithoutTopicInput)
    update!: SubtopicUpdateWithoutTopicInput;

    @Field(() => SubtopicCreateWithoutTopicInput, {nullable:false})
    @Type(() => SubtopicCreateWithoutTopicInput)
    create!: SubtopicCreateWithoutTopicInput;
}
