import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { TopicUpdateOneRequiredWithoutDocNestedInput } from '../topic/topic-update-one-required-without-doc-nested.input';
import { UserUpdateOneRequiredWithoutDocNestedInput } from '../user/user-update-one-required-without-doc-nested.input';
import { ScoreUpdateManyWithoutDocumentNestedInput } from '../score/score-update-many-without-document-nested.input';
import { SubtopicUpdateOneWithoutDocNestedInput } from '../subtopic/subtopic-update-one-without-doc-nested.input';

@InputType()
export class DocUpdateWithoutGradesInput {

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

    @Field(() => TopicUpdateOneRequiredWithoutDocNestedInput, {nullable:true})
    topic?: TopicUpdateOneRequiredWithoutDocNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutDocNestedInput, {nullable:true})
    author?: UserUpdateOneRequiredWithoutDocNestedInput;

    @Field(() => ScoreUpdateManyWithoutDocumentNestedInput, {nullable:true})
    Score?: ScoreUpdateManyWithoutDocumentNestedInput;

    @Field(() => SubtopicUpdateOneWithoutDocNestedInput, {nullable:true})
    Subtopic?: SubtopicUpdateOneWithoutDocNestedInput;
}
