import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { GradeUpdateOneRequiredWithoutUsersNestedInput } from '../grade/grade-update-one-required-without-users-nested.input';
import { SchoolUpdateOneRequiredWithoutUsersNestedInput } from '../school/school-update-one-required-without-users-nested.input';
import { ScoreUpdateManyWithoutUserNestedInput } from '../score/score-update-many-without-user-nested.input';

@InputType()
export class UserUpdateWithoutDocInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastname?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    stars?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumRoleFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    nickname?: StringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => GradeUpdateOneRequiredWithoutUsersNestedInput, {nullable:true})
    grade?: GradeUpdateOneRequiredWithoutUsersNestedInput;

    @Field(() => SchoolUpdateOneRequiredWithoutUsersNestedInput, {nullable:true})
    school?: SchoolUpdateOneRequiredWithoutUsersNestedInput;

    @Field(() => ScoreUpdateManyWithoutUserNestedInput, {nullable:true})
    Score?: ScoreUpdateManyWithoutUserNestedInput;
}
