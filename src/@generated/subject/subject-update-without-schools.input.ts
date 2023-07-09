import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { DocUpdateManyWithoutSubjectNestedInput } from '../doc/doc-update-many-without-subject-nested.input';
import { TopicUpdateManyWithoutSubjectNestedInput } from '../topic/topic-update-many-without-subject-nested.input';
import { ScoreUpdateManyWithoutSubjectNestedInput } from '../score/score-update-many-without-subject-nested.input';

@InputType()
export class SubjectUpdateWithoutSchoolsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    color?: StringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => DocUpdateManyWithoutSubjectNestedInput, {nullable:true})
    docs?: DocUpdateManyWithoutSubjectNestedInput;

    @Field(() => TopicUpdateManyWithoutSubjectNestedInput, {nullable:true})
    topics?: TopicUpdateManyWithoutSubjectNestedInput;

    @Field(() => ScoreUpdateManyWithoutSubjectNestedInput, {nullable:true})
    Score?: ScoreUpdateManyWithoutSubjectNestedInput;
}