import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubtopicWhereUniqueInput } from './subtopic-where-unique.input';
import { Type } from 'class-transformer';
import { SubtopicCreateWithoutTopicInput } from './subtopic-create-without-topic.input';

@InputType()
export class SubtopicCreateOrConnectWithoutTopicInput {

    @Field(() => SubtopicWhereUniqueInput, {nullable:false})
    @Type(() => SubtopicWhereUniqueInput)
    where!: SubtopicWhereUniqueInput;

    @Field(() => SubtopicCreateWithoutTopicInput, {nullable:false})
    @Type(() => SubtopicCreateWithoutTopicInput)
    create!: SubtopicCreateWithoutTopicInput;
}
