import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { GradesOnDocsUncheckedUpdateManyWithoutGradeNestedInput } from '../grades-on-docs/grades-on-docs-unchecked-update-many-without-grade-nested.input';
import { GradesOnSchoolsUncheckedUpdateManyWithoutGradeNestedInput } from '../grades-on-schools/grades-on-schools-unchecked-update-many-without-grade-nested.input';

@InputType()
export class GradeUncheckedUpdateWithoutUsersInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    grade?: StringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => GradesOnDocsUncheckedUpdateManyWithoutGradeNestedInput, {nullable:true})
    docs?: GradesOnDocsUncheckedUpdateManyWithoutGradeNestedInput;

    @Field(() => GradesOnSchoolsUncheckedUpdateManyWithoutGradeNestedInput, {nullable:true})
    schools?: GradesOnSchoolsUncheckedUpdateManyWithoutGradeNestedInput;
}
