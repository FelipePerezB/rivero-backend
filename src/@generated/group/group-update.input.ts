import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { UserUpdateManyWithoutGroupNestedInput } from '../user/user-update-many-without-group-nested.input';
import { OrganizationUpdateOneRequiredWithoutGroupsNestedInput } from '../organization/organization-update-one-required-without-groups-nested.input';

@InputType()
export class GroupUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateManyWithoutGroupNestedInput, {nullable:true})
    Users?: UserUpdateManyWithoutGroupNestedInput;

    @Field(() => OrganizationUpdateOneRequiredWithoutGroupsNestedInput, {nullable:true})
    Organization?: OrganizationUpdateOneRequiredWithoutGroupsNestedInput;
}
