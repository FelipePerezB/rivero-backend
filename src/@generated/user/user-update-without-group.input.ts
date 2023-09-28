import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { OrganizationUpdateOneRequiredWithoutUsersNestedInput } from '../organization/organization-update-one-required-without-users-nested.input';
import { ScoreUpdateManyWithoutUserNestedInput } from '../score/score-update-many-without-user-nested.input';
import { FileUpdateManyWithoutAuthorNestedInput } from '../file/file-update-many-without-author-nested.input';

@InputType()
export class UserUpdateWithoutGroupInput {

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

    @Field(() => OrganizationUpdateOneRequiredWithoutUsersNestedInput, {nullable:true})
    Organization?: OrganizationUpdateOneRequiredWithoutUsersNestedInput;

    @Field(() => ScoreUpdateManyWithoutUserNestedInput, {nullable:true})
    Score?: ScoreUpdateManyWithoutUserNestedInput;

    @Field(() => FileUpdateManyWithoutAuthorNestedInput, {nullable:true})
    File?: FileUpdateManyWithoutAuthorNestedInput;
}
