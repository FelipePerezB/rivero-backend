import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { TopicUpdateManyWithoutSubjectNestedInput } from '../topic/topic-update-many-without-subject-nested.input';
import { SubtopicUpdateManyWithoutSubjectNestedInput } from '../subtopic/subtopic-update-many-without-subject-nested.input';
import { DocUpdateManyWithoutSubjectNestedInput } from '../doc/doc-update-many-without-subject-nested.input';

@InputType()
export class SubjectUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    color?: StringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => TopicUpdateManyWithoutSubjectNestedInput, {nullable:true})
    Topics?: TopicUpdateManyWithoutSubjectNestedInput;

    @Field(() => SubtopicUpdateManyWithoutSubjectNestedInput, {nullable:true})
    Subtopic?: SubtopicUpdateManyWithoutSubjectNestedInput;

    @Field(() => DocUpdateManyWithoutSubjectNestedInput, {nullable:true})
    Docs?: DocUpdateManyWithoutSubjectNestedInput;
}
