import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { GradeUpdateOneRequiredWithoutUsersNestedInput } from '../grade/grade-update-one-required-without-users-nested.input';
import { SchoolUpdateOneRequiredWithoutUsersNestedInput } from '../school/school-update-one-required-without-users-nested.input';
import { ScoreUpdateManyWithoutUserNestedInput } from '../score/score-update-many-without-user-nested.input';

@InputType()
export class UserUpdateWithoutDocInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    externalId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: StringFieldUpdateOperationsInput;

    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumRoleFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => GradeUpdateOneRequiredWithoutUsersNestedInput, {nullable:true})
    Grade?: GradeUpdateOneRequiredWithoutUsersNestedInput;

    @Field(() => SchoolUpdateOneRequiredWithoutUsersNestedInput, {nullable:true})
    School?: SchoolUpdateOneRequiredWithoutUsersNestedInput;

    @Field(() => ScoreUpdateManyWithoutUserNestedInput, {nullable:true})
    Score?: ScoreUpdateManyWithoutUserNestedInput;
}
