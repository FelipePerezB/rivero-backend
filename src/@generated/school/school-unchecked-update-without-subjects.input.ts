import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { UserUncheckedUpdateManyWithoutSchoolNestedInput } from '../user/user-unchecked-update-many-without-school-nested.input';
import { GradesOnSchoolsUncheckedUpdateManyWithoutSchoolNestedInput } from '../grades-on-schools/grades-on-schools-unchecked-update-many-without-school-nested.input';

@InputType()
export class SchoolUncheckedUpdateWithoutSubjectsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => UserUncheckedUpdateManyWithoutSchoolNestedInput, {nullable:true})
    users?: UserUncheckedUpdateManyWithoutSchoolNestedInput;

    @Field(() => GradesOnSchoolsUncheckedUpdateManyWithoutSchoolNestedInput, {nullable:true})
    grades?: GradesOnSchoolsUncheckedUpdateManyWithoutSchoolNestedInput;
}
