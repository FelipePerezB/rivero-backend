import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { SubjectUpdateOneRequiredWithoutScoreNestedInput } from '../subject/subject-update-one-required-without-score-nested.input';
import { TopicUpdateOneRequiredWithoutScoreNestedInput } from '../topic/topic-update-one-required-without-score-nested.input';
import { UserUpdateOneRequiredWithoutScoreNestedInput } from '../user/user-update-one-required-without-score-nested.input';
import { DocUpdateOneRequiredWithoutScoreNestedInput } from '../doc/doc-update-one-required-without-score-nested.input';

@InputType()
export class ScoreUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    score?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    correct?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    total?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    wrong?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    null?: IntFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    alternatives?: any;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => SubjectUpdateOneRequiredWithoutScoreNestedInput, {nullable:true})
    subject?: SubjectUpdateOneRequiredWithoutScoreNestedInput;

    @Field(() => TopicUpdateOneRequiredWithoutScoreNestedInput, {nullable:true})
    topic?: TopicUpdateOneRequiredWithoutScoreNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutScoreNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutScoreNestedInput;

    @Field(() => DocUpdateOneRequiredWithoutScoreNestedInput, {nullable:true})
    document?: DocUpdateOneRequiredWithoutScoreNestedInput;
}
