import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumPrivacityFieldUpdateOperationsInput } from '../prisma/enum-privacity-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumDocTypesFieldUpdateOperationsInput } from '../prisma/enum-doc-types-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { TopicUpdateOneRequiredWithoutDocNestedInput } from '../topic/topic-update-one-required-without-doc-nested.input';
import { UserUpdateOneRequiredWithoutDocNestedInput } from '../user/user-update-one-required-without-doc-nested.input';
import { ScoreUpdateManyWithoutDocumentNestedInput } from '../score/score-update-many-without-document-nested.input';

@InputType()
export class DocUpdateWithoutSubtopicInput {

    @Field(() => EnumPrivacityFieldUpdateOperationsInput, {nullable:true})
    privacity?: EnumPrivacityFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => EnumDocTypesFieldUpdateOperationsInput, {nullable:true})
    type?: EnumDocTypesFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => TopicUpdateOneRequiredWithoutDocNestedInput, {nullable:true})
    topic?: TopicUpdateOneRequiredWithoutDocNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutDocNestedInput, {nullable:true})
    author?: UserUpdateOneRequiredWithoutDocNestedInput;

    @Field(() => ScoreUpdateManyWithoutDocumentNestedInput, {nullable:true})
    Score?: ScoreUpdateManyWithoutDocumentNestedInput;
}
