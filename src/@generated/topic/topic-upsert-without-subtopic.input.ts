import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TopicUpdateWithoutSubtopicInput } from './topic-update-without-subtopic.input';
import { Type } from 'class-transformer';
import { TopicCreateWithoutSubtopicInput } from './topic-create-without-subtopic.input';
import { TopicWhereInput } from './topic-where.input';

@InputType()
export class TopicUpsertWithoutSubtopicInput {

    @Field(() => TopicUpdateWithoutSubtopicInput, {nullable:false})
    @Type(() => TopicUpdateWithoutSubtopicInput)
    update!: TopicUpdateWithoutSubtopicInput;

    @Field(() => TopicCreateWithoutSubtopicInput, {nullable:false})
    @Type(() => TopicCreateWithoutSubtopicInput)
    create!: TopicCreateWithoutSubtopicInput;

    @Field(() => TopicWhereInput, {nullable:true})
    @Type(() => TopicWhereInput)
    where?: TopicWhereInput;
}
