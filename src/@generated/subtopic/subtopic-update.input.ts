import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { SubjectUpdateOneWithoutSubtopicNestedInput } from '../subject/subject-update-one-without-subtopic-nested.input';
import { TopicUpdateOneRequiredWithoutSubtopicsNestedInput } from '../topic/topic-update-one-required-without-subtopics-nested.input';
import { DocUpdateManyWithoutSubtopicNestedInput } from '../doc/doc-update-many-without-subtopic-nested.input';

@InputType()
export class SubtopicUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => SubjectUpdateOneWithoutSubtopicNestedInput, {nullable:true})
    Subject?: SubjectUpdateOneWithoutSubtopicNestedInput;

    @Field(() => TopicUpdateOneRequiredWithoutSubtopicsNestedInput, {nullable:true})
    Topic?: TopicUpdateOneRequiredWithoutSubtopicsNestedInput;

    @Field(() => DocUpdateManyWithoutSubtopicNestedInput, {nullable:true})
    Docs?: DocUpdateManyWithoutSubtopicNestedInput;
}
