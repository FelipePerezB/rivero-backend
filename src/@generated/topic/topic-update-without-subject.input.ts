import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { DocUpdateManyWithoutTopicNestedInput } from '../doc/doc-update-many-without-topic-nested.input';
import { SubtopicUpdateManyWithoutTopicNestedInput } from '../subtopic/subtopic-update-many-without-topic-nested.input';

@InputType()
export class TopicUpdateWithoutSubjectInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => DocUpdateManyWithoutTopicNestedInput, {nullable:true})
    Docs?: DocUpdateManyWithoutTopicNestedInput;

    @Field(() => SubtopicUpdateManyWithoutTopicNestedInput, {nullable:true})
    Subtopics?: SubtopicUpdateManyWithoutTopicNestedInput;
}
