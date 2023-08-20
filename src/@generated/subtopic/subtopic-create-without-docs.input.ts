import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectCreateNestedOneWithoutSubtopicInput } from '../subject/subject-create-nested-one-without-subtopic.input';
import { TopicCreateNestedOneWithoutSubtopicsInput } from '../topic/topic-create-nested-one-without-subtopics.input';

@InputType()
export class SubtopicCreateWithoutDocsInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => SubjectCreateNestedOneWithoutSubtopicInput, {nullable:true})
    Subject?: SubjectCreateNestedOneWithoutSubtopicInput;

    @Field(() => TopicCreateNestedOneWithoutSubtopicsInput, {nullable:false})
    Topic!: TopicCreateNestedOneWithoutSubtopicsInput;
}
