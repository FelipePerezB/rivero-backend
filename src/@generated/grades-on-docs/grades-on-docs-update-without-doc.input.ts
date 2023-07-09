import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { GradeUpdateOneRequiredWithoutDocsNestedInput } from '../grade/grade-update-one-required-without-docs-nested.input';

@InputType()
export class GradesOnDocsUpdateWithoutDocInput {

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => GradeUpdateOneRequiredWithoutDocsNestedInput, {nullable:true})
    grade?: GradeUpdateOneRequiredWithoutDocsNestedInput;
}
