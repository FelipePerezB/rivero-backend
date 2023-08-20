import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TopicWhereInput } from './topic-where.input';
import { Type } from 'class-transformer';
import { TopicUpdateWithoutSubtopicInput } from './topic-update-without-subtopic.input';

@InputType()
export class TopicUpdateToOneWithWhereWithoutSubtopicInput {

    @Field(() => TopicWhereInput, {nullable:true})
    @Type(() => TopicWhereInput)
    where?: TopicWhereInput;

    @Field(() => TopicUpdateWithoutSubtopicInput, {nullable:false})
    @Type(() => TopicUpdateWithoutSubtopicInput)
    data!: TopicUpdateWithoutSubtopicInput;
}
