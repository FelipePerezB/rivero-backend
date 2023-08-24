import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { UserUpdateManyWithoutGradeNestedInput } from '../user/user-update-many-without-grade-nested.input';
import { SchoolUpdateOneRequiredWithoutGradesNestedInput } from '../school/school-update-one-required-without-grades-nested.input';

@InputType()
export class GradeUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateManyWithoutGradeNestedInput, {nullable:true})
    Users?: UserUpdateManyWithoutGradeNestedInput;

    @Field(() => SchoolUpdateOneRequiredWithoutGradesNestedInput, {nullable:true})
    School?: SchoolUpdateOneRequiredWithoutGradesNestedInput;
}
