import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { SubjectsOnSchoolsUncheckedUpdateManyWithoutSubjectNestedInput } from '../subjects-on-schools/subjects-on-schools-unchecked-update-many-without-subject-nested.input';
import { TopicUncheckedUpdateManyWithoutSubjectNestedInput } from '../topic/topic-unchecked-update-many-without-subject-nested.input';

@InputType()
export class SubjectUncheckedUpdateInput {

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

    @Field(() => SubjectsOnSchoolsUncheckedUpdateManyWithoutSubjectNestedInput, {nullable:true})
    schools?: SubjectsOnSchoolsUncheckedUpdateManyWithoutSubjectNestedInput;

    @Field(() => TopicUncheckedUpdateManyWithoutSubjectNestedInput, {nullable:true})
    topics?: TopicUncheckedUpdateManyWithoutSubjectNestedInput;
}
