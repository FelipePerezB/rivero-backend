import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TopicCreateWithoutSubtopicInput } from './topic-create-without-subtopic.input';
import { Type } from 'class-transformer';
import { TopicCreateOrConnectWithoutSubtopicInput } from './topic-create-or-connect-without-subtopic.input';
import { TopicWhereUniqueInput } from './topic-where-unique.input';

@InputType()
export class TopicCreateNestedOneWithoutSubtopicInput {

    @Field(() => TopicCreateWithoutSubtopicInput, {nullable:true})
    @Type(() => TopicCreateWithoutSubtopicInput)
    create?: TopicCreateWithoutSubtopicInput;

    @Field(() => TopicCreateOrConnectWithoutSubtopicInput, {nullable:true})
    @Type(() => TopicCreateOrConnectWithoutSubtopicInput)
    connectOrCreate?: TopicCreateOrConnectWithoutSubtopicInput;

    @Field(() => TopicWhereUniqueInput, {nullable:true})
    @Type(() => TopicWhereUniqueInput)
    connect?: TopicWhereUniqueInput;
}
