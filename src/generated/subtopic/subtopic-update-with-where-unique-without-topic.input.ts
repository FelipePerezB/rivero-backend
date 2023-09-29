import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubtopicWhereUniqueInput } from './subtopic-where-unique.input';
import { Type } from 'class-transformer';
import { SubtopicUpdateWithoutTopicInput } from './subtopic-update-without-topic.input';

@InputType()
export class SubtopicUpdateWithWhereUniqueWithoutTopicInput {

    @Field(() => SubtopicWhereUniqueInput, {nullable:false})
    @Type(() => SubtopicWhereUniqueInput)
    where!: SubtopicWhereUniqueInput;

    @Field(() => SubtopicUpdateWithoutTopicInput, {nullable:false})
    @Type(() => SubtopicUpdateWithoutTopicInput)
    data!: SubtopicUpdateWithoutTopicInput;
}
