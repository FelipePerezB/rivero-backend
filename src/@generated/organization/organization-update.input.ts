import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { UserUpdateManyWithoutOrganizationNestedInput } from '../user/user-update-many-without-organization-nested.input';
import { GroupUpdateManyWithoutOrganizationNestedInput } from '../group/group-update-many-without-organization-nested.input';

@InputType()
export class OrganizationUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    Users?: UserUpdateManyWithoutOrganizationNestedInput;

    @Field(() => GroupUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    Groups?: GroupUpdateManyWithoutOrganizationNestedInput;
}
