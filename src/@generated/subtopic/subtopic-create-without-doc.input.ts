import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectCreateNestedOneWithoutSubtopicInput } from '../subject/subject-create-nested-one-without-subtopic.input';
import { TopicCreateNestedOneWithoutSubtopicInput } from '../topic/topic-create-nested-one-without-subtopic.input';

@InputType()
export class SubtopicCreateWithoutDocInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => SubjectCreateNestedOneWithoutSubtopicInput, {nullable:true})
    subject?: SubjectCreateNestedOneWithoutSubtopicInput;

    @Field(() => TopicCreateNestedOneWithoutSubtopicInput, {nullable:false})
    Topic!: TopicCreateNestedOneWithoutSubtopicInput;
}
