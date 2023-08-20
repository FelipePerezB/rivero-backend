import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { SubtopicUncheckedUpdateManyWithoutSubjectNestedInput } from '../subtopic/subtopic-unchecked-update-many-without-subject-nested.input';
import { DocUncheckedUpdateManyWithoutSubjectNestedInput } from '../doc/doc-unchecked-update-many-without-subject-nested.input';

@InputType()
export class SubjectUncheckedUpdateWithoutTopicsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    color?: StringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => SubtopicUncheckedUpdateManyWithoutSubjectNestedInput, {nullable:true})
    Subtopic?: SubtopicUncheckedUpdateManyWithoutSubjectNestedInput;

    @Field(() => DocUncheckedUpdateManyWithoutSubjectNestedInput, {nullable:true})
    Docs?: DocUncheckedUpdateManyWithoutSubjectNestedInput;
}
