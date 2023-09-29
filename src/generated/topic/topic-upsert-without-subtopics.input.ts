import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TopicUpdateWithoutSubtopicsInput } from './topic-update-without-subtopics.input';
import { Type } from 'class-transformer';
import { TopicCreateWithoutSubtopicsInput } from './topic-create-without-subtopics.input';
import { TopicWhereInput } from './topic-where.input';

@InputType()
export class TopicUpsertWithoutSubtopicsInput {

    @Field(() => TopicUpdateWithoutSubtopicsInput, {nullable:false})
    @Type(() => TopicUpdateWithoutSubtopicsInput)
    update!: TopicUpdateWithoutSubtopicsInput;

    @Field(() => TopicCreateWithoutSubtopicsInput, {nullable:false})
    @Type(() => TopicCreateWithoutSubtopicsInput)
    create!: TopicCreateWithoutSubtopicsInput;

    @Field(() => TopicWhereInput, {nullable:true})
    @Type(() => TopicWhereInput)
    where?: TopicWhereInput;
}
