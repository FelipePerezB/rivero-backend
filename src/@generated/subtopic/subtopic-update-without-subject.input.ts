import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { TopicUpdateOneRequiredWithoutSubtopicNestedInput } from '../topic/topic-update-one-required-without-subtopic-nested.input';
import { DocUpdateManyWithoutSubtopicNestedInput } from '../doc/doc-update-many-without-subtopic-nested.input';

@InputType()
export class SubtopicUpdateWithoutSubjectInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => TopicUpdateOneRequiredWithoutSubtopicNestedInput, {nullable:true})
    Topic?: TopicUpdateOneRequiredWithoutSubtopicNestedInput;

    @Field(() => DocUpdateManyWithoutSubtopicNestedInput, {nullable:true})
    Doc?: DocUpdateManyWithoutSubtopicNestedInput;
}
