import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumPrivacityFieldUpdateOperationsInput } from '../prisma/enum-privacity-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutFileNestedInput } from '../user/user-update-one-required-without-file-nested.input';
import { NoteUpdateManyWithoutFileNestedInput } from '../note/note-update-many-without-file-nested.input';

@InputType()
export class FileUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    externalId?: StringFieldUpdateOperationsInput;

    @Field(() => EnumPrivacityFieldUpdateOperationsInput, {nullable:true})
    privacity?: EnumPrivacityFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutFileNestedInput, {nullable:true})
    Author?: UserUpdateOneRequiredWithoutFileNestedInput;

    @Field(() => NoteUpdateManyWithoutFileNestedInput, {nullable:true})
    Note?: NoteUpdateManyWithoutFileNestedInput;
}
