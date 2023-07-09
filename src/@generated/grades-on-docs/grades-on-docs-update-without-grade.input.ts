import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { DocUpdateOneRequiredWithoutGradesNestedInput } from '../doc/doc-update-one-required-without-grades-nested.input';

@InputType()
export class GradesOnDocsUpdateWithoutGradeInput {

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => DocUpdateOneRequiredWithoutGradesNestedInput, {nullable:true})
    doc?: DocUpdateOneRequiredWithoutGradesNestedInput;
}
