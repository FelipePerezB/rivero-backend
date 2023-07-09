import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { UserUpdateManyWithoutGradeNestedInput } from '../user/user-update-many-without-grade-nested.input';
import { GradesOnSchoolsUpdateManyWithoutGradeNestedInput } from '../grades-on-schools/grades-on-schools-update-many-without-grade-nested.input';

@InputType()
export class GradeUpdateWithoutDocsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    grade?: StringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateManyWithoutGradeNestedInput, {nullable:true})
    users?: UserUpdateManyWithoutGradeNestedInput;

    @Field(() => GradesOnSchoolsUpdateManyWithoutGradeNestedInput, {nullable:true})
    schools?: GradesOnSchoolsUpdateManyWithoutGradeNestedInput;
}
