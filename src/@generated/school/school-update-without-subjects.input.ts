import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { UserUpdateManyWithoutSchoolNestedInput } from '../user/user-update-many-without-school-nested.input';
import { GradesOnSchoolsUpdateManyWithoutSchoolNestedInput } from '../grades-on-schools/grades-on-schools-update-many-without-school-nested.input';

@InputType()
export class SchoolUpdateWithoutSubjectsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateManyWithoutSchoolNestedInput, {nullable:true})
    users?: UserUpdateManyWithoutSchoolNestedInput;

    @Field(() => GradesOnSchoolsUpdateManyWithoutSchoolNestedInput, {nullable:true})
    grades?: GradesOnSchoolsUpdateManyWithoutSchoolNestedInput;
}
