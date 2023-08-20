import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TopicCreateNestedOneWithoutSubtopicsInput } from '../topic/topic-create-nested-one-without-subtopics.input';
import { DocCreateNestedManyWithoutSubtopicInput } from '../doc/doc-create-nested-many-without-subtopic.input';

@InputType()
export class SubtopicCreateWithoutSubjectInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => TopicCreateNestedOneWithoutSubtopicsInput, {nullable:false})
    Topic!: TopicCreateNestedOneWithoutSubtopicsInput;

    @Field(() => DocCreateNestedManyWithoutSubtopicInput, {nullable:true})
    Docs?: DocCreateNestedManyWithoutSubtopicInput;
}
