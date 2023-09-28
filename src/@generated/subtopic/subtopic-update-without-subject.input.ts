import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { TopicUpdateOneRequiredWithoutSubtopicsNestedInput } from '../topic/topic-update-one-required-without-subtopics-nested.input';
import { NoteUpdateManyWithoutSubtopicNestedInput } from '../note/note-update-many-without-subtopic-nested.input';

@InputType()
export class SubtopicUpdateWithoutSubjectInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => TopicUpdateOneRequiredWithoutSubtopicsNestedInput, {nullable:true})
    Topic?: TopicUpdateOneRequiredWithoutSubtopicsNestedInput;

    @Field(() => NoteUpdateManyWithoutSubtopicNestedInput, {nullable:true})
    Notes?: NoteUpdateManyWithoutSubtopicNestedInput;
}
