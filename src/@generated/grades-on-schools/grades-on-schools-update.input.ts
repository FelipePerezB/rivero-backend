import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { GradeUpdateOneRequiredWithoutSchoolsNestedInput } from '../grade/grade-update-one-required-without-schools-nested.input';

@InputType()
export class GradesOnSchoolsUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    schoolId?: IntFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => GradeUpdateOneRequiredWithoutSchoolsNestedInput, {nullable:true})
    Grade?: GradeUpdateOneRequiredWithoutSchoolsNestedInput;
}
