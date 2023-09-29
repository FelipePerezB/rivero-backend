import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TopicCreateWithoutSubtopicsInput } from './topic-create-without-subtopics.input';
import { Type } from 'class-transformer';
import { TopicCreateOrConnectWithoutSubtopicsInput } from './topic-create-or-connect-without-subtopics.input';
import { TopicWhereUniqueInput } from './topic-where-unique.input';

@InputType()
export class TopicCreateNestedOneWithoutSubtopicsInput {

    @Field(() => TopicCreateWithoutSubtopicsInput, {nullable:true})
    @Type(() => TopicCreateWithoutSubtopicsInput)
    create?: TopicCreateWithoutSubtopicsInput;

    @Field(() => TopicCreateOrConnectWithoutSubtopicsInput, {nullable:true})
    @Type(() => TopicCreateOrConnectWithoutSubtopicsInput)
    connectOrCreate?: TopicCreateOrConnectWithoutSubtopicsInput;

    @Field(() => TopicWhereUniqueInput, {nullable:true})
    @Type(() => TopicWhereUniqueInput)
    connect?: TopicWhereUniqueInput;
}
