import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutScoreNestedInput } from '../user/user-update-one-required-without-score-nested.input';
import { DocUpdateOneRequiredWithoutScoreNestedInput } from '../doc/doc-update-one-required-without-score-nested.input';

@InputType()
export class ScoreUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    score?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    alternatives?: StringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutScoreNestedInput, {nullable:true})
    User?: UserUpdateOneRequiredWithoutScoreNestedInput;

    @Field(() => DocUpdateOneRequiredWithoutScoreNestedInput, {nullable:true})
    document?: DocUpdateOneRequiredWithoutScoreNestedInput;
}
