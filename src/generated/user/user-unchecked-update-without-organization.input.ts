import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { GroupUncheckedUpdateManyWithoutUsersNestedInput } from '../group/group-unchecked-update-many-without-users-nested.input';
import { ScoreUncheckedUpdateManyWithoutUserNestedInput } from '../score/score-unchecked-update-many-without-user-nested.input';
import { FileUncheckedUpdateManyWithoutAuthorNestedInput } from '../file/file-unchecked-update-many-without-author-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutOrganizationInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    externalId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastname?: StringFieldUpdateOperationsInput;

    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumRoleFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => GroupUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    Group?: GroupUncheckedUpdateManyWithoutUsersNestedInput;

    @Field(() => ScoreUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    Score?: ScoreUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => FileUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    File?: FileUncheckedUpdateManyWithoutAuthorNestedInput;
}
