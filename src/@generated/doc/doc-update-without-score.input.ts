import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutDocNestedInput } from '../user/user-update-one-required-without-doc-nested.input';
import { SubjectUpdateOneRequiredWithoutDocsNestedInput } from '../subject/subject-update-one-required-without-docs-nested.input';
import { TopicUpdateOneRequiredWithoutDocNestedInput } from '../topic/topic-update-one-required-without-doc-nested.input';
import { GradesOnDocsUpdateManyWithoutDocNestedInput } from '../grades-on-docs/grades-on-docs-update-many-without-doc-nested.input';

@InputType()
export class DocUpdateWithoutScoreInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    type?: StringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    content?: any;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutDocNestedInput, {nullable:true})
    author?: UserUpdateOneRequiredWithoutDocNestedInput;

    @Field(() => SubjectUpdateOneRequiredWithoutDocsNestedInput, {nullable:true})
    subject?: SubjectUpdateOneRequiredWithoutDocsNestedInput;

    @Field(() => TopicUpdateOneRequiredWithoutDocNestedInput, {nullable:true})
    topic?: TopicUpdateOneRequiredWithoutDocNestedInput;

    @Field(() => GradesOnDocsUpdateManyWithoutDocNestedInput, {nullable:true})
    grades?: GradesOnDocsUpdateManyWithoutDocNestedInput;
}
