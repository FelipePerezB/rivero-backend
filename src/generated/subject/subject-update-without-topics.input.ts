import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { SubtopicUpdateManyWithoutSubjectNestedInput } from '../subtopic/subtopic-update-many-without-subject-nested.input';
import { NoteUpdateManyWithoutSubjectNestedInput } from '../note/note-update-many-without-subject-nested.input';

@InputType()
export class SubjectUpdateWithoutTopicsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    color?: StringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => SubtopicUpdateManyWithoutSubjectNestedInput, {nullable:true})
    Subtopic?: SubtopicUpdateManyWithoutSubjectNestedInput;

    @Field(() => NoteUpdateManyWithoutSubjectNestedInput, {nullable:true})
    Notes?: NoteUpdateManyWithoutSubjectNestedInput;
}
