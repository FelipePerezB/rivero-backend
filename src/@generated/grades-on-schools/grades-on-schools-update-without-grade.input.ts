import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { SchoolUpdateOneRequiredWithoutGradesNestedInput } from '../school/school-update-one-required-without-grades-nested.input';

@InputType()
export class GradesOnSchoolsUpdateWithoutGradeInput {

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => SchoolUpdateOneRequiredWithoutGradesNestedInput, {nullable:true})
    School?: SchoolUpdateOneRequiredWithoutGradesNestedInput;
}
