import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectCreateNestedOneWithoutTopicsInput } from '../subject/subject-create-nested-one-without-topics.input';
import { SubtopicCreateNestedManyWithoutTopicInput } from '../subtopic/subtopic-create-nested-many-without-topic.input';

@InputType()
export class TopicCreateWithoutNotesInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => SubjectCreateNestedOneWithoutTopicsInput, {nullable:true})
    Subject?: SubjectCreateNestedOneWithoutTopicsInput;

    @Field(() => SubtopicCreateNestedManyWithoutTopicInput, {nullable:true})
    Subtopics?: SubtopicCreateNestedManyWithoutTopicInput;
}
