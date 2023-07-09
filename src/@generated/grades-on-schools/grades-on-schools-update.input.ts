import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { GradeUpdateOneRequiredWithoutSchoolsNestedInput } from '../grade/grade-update-one-required-without-schools-nested.input';
import { SchoolUpdateOneRequiredWithoutGradesNestedInput } from '../school/school-update-one-required-without-grades-nested.input';

@InputType()
export class GradesOnSchoolsUpdateInput {

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => GradeUpdateOneRequiredWithoutSchoolsNestedInput, {nullable:true})
    Grade?: GradeUpdateOneRequiredWithoutSchoolsNestedInput;

    @Field(() => SchoolUpdateOneRequiredWithoutGradesNestedInput, {nullable:true})
    School?: SchoolUpdateOneRequiredWithoutGradesNestedInput;
}
