import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { SubjectUpdateOneRequiredWithoutDocsNestedInput } from '../subject/subject-update-one-required-without-docs-nested.input';
import { GradesOnDocsUpdateManyWithoutDocNestedInput } from '../grades-on-docs/grades-on-docs-update-many-without-doc-nested.input';
import { ScoreUpdateManyWithoutDocumentNestedInput } from '../score/score-update-many-without-document-nested.input';

@InputType()
export class DocUpdateWithoutTopicInput {

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

    @Field(() => SubjectUpdateOneRequiredWithoutDocsNestedInput, {nullable:true})
    subject?: SubjectUpdateOneRequiredWithoutDocsNestedInput;

    @Field(() => GradesOnDocsUpdateManyWithoutDocNestedInput, {nullable:true})
    grades?: GradesOnDocsUpdateManyWithoutDocNestedInput;

    @Field(() => ScoreUpdateManyWithoutDocumentNestedInput, {nullable:true})
    Score?: ScoreUpdateManyWithoutDocumentNestedInput;
}