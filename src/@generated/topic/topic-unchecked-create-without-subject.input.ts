import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DocUncheckedCreateNestedManyWithoutTopicInput } from '../doc/doc-unchecked-create-nested-many-without-topic.input';
import { SubtopicUncheckedCreateNestedManyWithoutTopicInput } from '../subtopic/subtopic-unchecked-create-nested-many-without-topic.input';

@InputType()
export class TopicUncheckedCreateWithoutSubjectInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => DocUncheckedCreateNestedManyWithoutTopicInput, {nullable:true})
    Docs?: DocUncheckedCreateNestedManyWithoutTopicInput;

    @Field(() => SubtopicUncheckedCreateNestedManyWithoutTopicInput, {nullable:true})
    Subtopics?: SubtopicUncheckedCreateNestedManyWithoutTopicInput;
}
