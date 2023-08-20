import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectCreateNestedOneWithoutTopicsInput } from '../subject/subject-create-nested-one-without-topics.input';
import { DocCreateNestedManyWithoutTopicInput } from '../doc/doc-create-nested-many-without-topic.input';
import { SubtopicCreateNestedManyWithoutTopicInput } from '../subtopic/subtopic-create-nested-many-without-topic.input';

@InputType()
export class TopicCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => SubjectCreateNestedOneWithoutTopicsInput, {nullable:true})
    Subject?: SubjectCreateNestedOneWithoutTopicsInput;

    @Field(() => DocCreateNestedManyWithoutTopicInput, {nullable:true})
    Docs?: DocCreateNestedManyWithoutTopicInput;

    @Field(() => SubtopicCreateNestedManyWithoutTopicInput, {nullable:true})
    Subtopics?: SubtopicCreateNestedManyWithoutTopicInput;
}
