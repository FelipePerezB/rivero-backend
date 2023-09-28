import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { ScoreUncheckedUpdateManyWithoutNoteNestedInput } from '../score/score-unchecked-update-many-without-note-nested.input';

@InputType()
export class NoteUncheckedUpdateWithoutSubjectInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    topicId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    subtopicId?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    fileId?: IntFieldUpdateOperationsInput;

    @Field(() => ScoreUncheckedUpdateManyWithoutNoteNestedInput, {nullable:true})
    Scores?: ScoreUncheckedUpdateManyWithoutNoteNestedInput;
}
