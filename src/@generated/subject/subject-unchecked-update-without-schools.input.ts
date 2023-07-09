import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { DocUncheckedUpdateManyWithoutSubjectNestedInput } from '../doc/doc-unchecked-update-many-without-subject-nested.input';
import { TopicUncheckedUpdateManyWithoutSubjectNestedInput } from '../topic/topic-unchecked-update-many-without-subject-nested.input';
import { ScoreUncheckedUpdateManyWithoutSubjectNestedInput } from '../score/score-unchecked-update-many-without-subject-nested.input';

@InputType()
export class SubjectUncheckedUpdateWithoutSchoolsInput {

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

    @Field(() => DocUncheckedUpdateManyWithoutSubjectNestedInput, {nullable:true})
    docs?: DocUncheckedUpdateManyWithoutSubjectNestedInput;

    @Field(() => TopicUncheckedUpdateManyWithoutSubjectNestedInput, {nullable:true})
    topics?: TopicUncheckedUpdateManyWithoutSubjectNestedInput;

    @Field(() => ScoreUncheckedUpdateManyWithoutSubjectNestedInput, {nullable:true})
    Score?: ScoreUncheckedUpdateManyWithoutSubjectNestedInput;
}
