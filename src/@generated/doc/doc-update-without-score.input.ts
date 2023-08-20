import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumPrivacityFieldUpdateOperationsInput } from '../prisma/enum-privacity-field-update-operations.input';
import { EnumDocTypesFieldUpdateOperationsInput } from '../prisma/enum-doc-types-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { SubjectUpdateOneRequiredWithoutDocsNestedInput } from '../subject/subject-update-one-required-without-docs-nested.input';
import { TopicUpdateOneRequiredWithoutDocsNestedInput } from '../topic/topic-update-one-required-without-docs-nested.input';
import { SubtopicUpdateOneWithoutDocsNestedInput } from '../subtopic/subtopic-update-one-without-docs-nested.input';
import { UserUpdateOneRequiredWithoutDocNestedInput } from '../user/user-update-one-required-without-doc-nested.input';

@InputType()
export class DocUpdateWithoutScoreInput {

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

    @Field(() => SubjectUpdateOneRequiredWithoutDocsNestedInput, {nullable:true})
    Subject?: SubjectUpdateOneRequiredWithoutDocsNestedInput;

    @Field(() => TopicUpdateOneRequiredWithoutDocsNestedInput, {nullable:true})
    Topic?: TopicUpdateOneRequiredWithoutDocsNestedInput;

    @Field(() => SubtopicUpdateOneWithoutDocsNestedInput, {nullable:true})
    Subtopic?: SubtopicUpdateOneWithoutDocsNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutDocNestedInput, {nullable:true})
    Author?: UserUpdateOneRequiredWithoutDocNestedInput;
}
