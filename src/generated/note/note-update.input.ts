import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { EnumTypesFieldUpdateOperationsInput } from '../prisma/enum-types-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { SubjectUpdateOneWithoutNotesNestedInput } from '../subject/subject-update-one-without-notes-nested.input';
import { TopicUpdateOneWithoutNotesNestedInput } from '../topic/topic-update-one-without-notes-nested.input';
import { SubtopicUpdateOneWithoutNotesNestedInput } from '../subtopic/subtopic-update-one-without-notes-nested.input';
import { FileUpdateOneWithoutNoteNestedInput } from '../file/file-update-one-without-note-nested.input';
import { ScoreUpdateManyWithoutNoteNestedInput } from '../score/score-update-many-without-note-nested.input';

@InputType()
export class NoteUpdateInput {

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    fileId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => EnumTypesFieldUpdateOperationsInput, {nullable:true})
    type?: EnumTypesFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => SubjectUpdateOneWithoutNotesNestedInput, {nullable:true})
    Subject?: SubjectUpdateOneWithoutNotesNestedInput;

    @Field(() => TopicUpdateOneWithoutNotesNestedInput, {nullable:true})
    Topic?: TopicUpdateOneWithoutNotesNestedInput;

    @Field(() => SubtopicUpdateOneWithoutNotesNestedInput, {nullable:true})
    Subtopic?: SubtopicUpdateOneWithoutNotesNestedInput;

    @Field(() => FileUpdateOneWithoutNoteNestedInput, {nullable:true})
    File?: FileUpdateOneWithoutNoteNestedInput;

    @Field(() => ScoreUpdateManyWithoutNoteNestedInput, {nullable:true})
    Scores?: ScoreUpdateManyWithoutNoteNestedInput;
}
