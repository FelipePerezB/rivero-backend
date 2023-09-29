import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { SubjectUpdateOneWithoutTopicsNestedInput } from '../subject/subject-update-one-without-topics-nested.input';
import { NoteUpdateManyWithoutTopicNestedInput } from '../note/note-update-many-without-topic-nested.input';

@InputType()
export class TopicUpdateWithoutSubtopicsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => SubjectUpdateOneWithoutTopicsNestedInput, {nullable:true})
    Subject?: SubjectUpdateOneWithoutTopicsNestedInput;

    @Field(() => NoteUpdateManyWithoutTopicNestedInput, {nullable:true})
    Notes?: NoteUpdateManyWithoutTopicNestedInput;
}
