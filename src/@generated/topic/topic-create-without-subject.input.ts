import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocCreateNestedManyWithoutTopicInput } from '../doc/doc-create-nested-many-without-topic.input';
import { SubtopicCreateNestedManyWithoutTopicInput } from '../subtopic/subtopic-create-nested-many-without-topic.input';

@InputType()
export class TopicCreateWithoutSubjectInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => DocCreateNestedManyWithoutTopicInput, {nullable:true})
    Docs?: DocCreateNestedManyWithoutTopicInput;

    @Field(() => SubtopicCreateNestedManyWithoutTopicInput, {nullable:true})
    Subtopics?: SubtopicCreateNestedManyWithoutTopicInput;
}
