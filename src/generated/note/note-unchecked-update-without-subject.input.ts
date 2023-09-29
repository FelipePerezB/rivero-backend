import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { EnumTypesFieldUpdateOperationsInput } from '../prisma/enum-types-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { FileUncheckedUpdateOneWithoutNoteNestedInput } from '../file/file-unchecked-update-one-without-note-nested.input';
import { ScoreUncheckedUpdateManyWithoutNoteNestedInput } from '../score/score-unchecked-update-many-without-note-nested.input';

@InputType()
export class NoteUncheckedUpdateWithoutSubjectInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    topicId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    subtopicId?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    fileId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => EnumTypesFieldUpdateOperationsInput, {nullable:true})
    type?: EnumTypesFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => FileUncheckedUpdateOneWithoutNoteNestedInput, {nullable:true})
    File?: FileUncheckedUpdateOneWithoutNoteNestedInput;

    @Field(() => ScoreUncheckedUpdateManyWithoutNoteNestedInput, {nullable:true})
    Scores?: ScoreUncheckedUpdateManyWithoutNoteNestedInput;
}
