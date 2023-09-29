import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TopicWhereUniqueInput } from './topic-where-unique.input';
import { Type } from 'class-transformer';
import { TopicCreateWithoutSubtopicsInput } from './topic-create-without-subtopics.input';

@InputType()
export class TopicCreateOrConnectWithoutSubtopicsInput {

    @Field(() => TopicWhereUniqueInput, {nullable:false})
    @Type(() => TopicWhereUniqueInput)
    where!: TopicWhereUniqueInput;

    @Field(() => TopicCreateWithoutSubtopicsInput, {nullable:false})
    @Type(() => TopicCreateWithoutSubtopicsInput)
    create!: TopicCreateWithoutSubtopicsInput;
}
