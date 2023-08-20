import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TopicWhereInput } from './topic-where.input';
import { Type } from 'class-transformer';
import { TopicUpdateWithoutSubtopicsInput } from './topic-update-without-subtopics.input';

@InputType()
export class TopicUpdateToOneWithWhereWithoutSubtopicsInput {

    @Field(() => TopicWhereInput, {nullable:true})
    @Type(() => TopicWhereInput)
    where?: TopicWhereInput;

    @Field(() => TopicUpdateWithoutSubtopicsInput, {nullable:false})
    @Type(() => TopicUpdateWithoutSubtopicsInput)
    data!: TopicUpdateWithoutSubtopicsInput;
}
