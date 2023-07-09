import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { ScoreUncheckedUpdateManyWithoutDocumentNestedInput } from '../score/score-unchecked-update-many-without-document-nested.input';

@InputType()
export class DocUncheckedUpdateWithoutGradesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

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

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    subjectId?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    topicId?: IntFieldUpdateOperationsInput;

    @Field(() => ScoreUncheckedUpdateManyWithoutDocumentNestedInput, {nullable:true})
    Score?: ScoreUncheckedUpdateManyWithoutDocumentNestedInput;
}
