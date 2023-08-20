import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumPrivacityFieldUpdateOperationsInput } from '../prisma/enum-privacity-field-update-operations.input';
import { EnumDocTypesFieldUpdateOperationsInput } from '../prisma/enum-doc-types-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { ScoreUpdateManyWithoutDocumentNestedInput } from '../score/score-update-many-without-document-nested.input';
import { SubjectUpdateOneRequiredWithoutDocsNestedInput } from '../subject/subject-update-one-required-without-docs-nested.input';
import { TopicUpdateOneRequiredWithoutDocsNestedInput } from '../topic/topic-update-one-required-without-docs-nested.input';
import { UserUpdateOneRequiredWithoutDocNestedInput } from '../user/user-update-one-required-without-doc-nested.input';

@InputType()
export class DocUpdateWithoutSubtopicInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    externalId?: StringFieldUpdateOperationsInput;

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

    @Field(() => ScoreUpdateManyWithoutDocumentNestedInput, {nullable:true})
    Score?: ScoreUpdateManyWithoutDocumentNestedInput;

    @Field(() => SubjectUpdateOneRequiredWithoutDocsNestedInput, {nullable:true})
    Subject?: SubjectUpdateOneRequiredWithoutDocsNestedInput;

    @Field(() => TopicUpdateOneRequiredWithoutDocsNestedInput, {nullable:true})
    Topic?: TopicUpdateOneRequiredWithoutDocsNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutDocNestedInput, {nullable:true})
    Author?: UserUpdateOneRequiredWithoutDocNestedInput;
}
