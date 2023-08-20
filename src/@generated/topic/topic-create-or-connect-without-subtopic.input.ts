import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TopicWhereUniqueInput } from './topic-where-unique.input';
import { Type } from 'class-transformer';
import { TopicCreateWithoutSubtopicInput } from './topic-create-without-subtopic.input';

@InputType()
export class TopicCreateOrConnectWithoutSubtopicInput {

    @Field(() => TopicWhereUniqueInput, {nullable:false})
    @Type(() => TopicWhereUniqueInput)
    where!: TopicWhereUniqueInput;

    @Field(() => TopicCreateWithoutSubtopicInput, {nullable:false})
    @Type(() => TopicCreateWithoutSubtopicInput)
    create!: TopicCreateWithoutSubtopicInput;
}
