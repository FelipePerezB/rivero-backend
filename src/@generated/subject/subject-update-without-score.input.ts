import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { DocUpdateManyWithoutSubjectNestedInput } from '../doc/doc-update-many-without-subject-nested.input';
import { SubjectsOnSchoolsUpdateManyWithoutSubjectNestedInput } from '../subjects-on-schools/subjects-on-schools-update-many-without-subject-nested.input';
import { TopicUpdateManyWithoutSubjectNestedInput } from '../topic/topic-update-many-without-subject-nested.input';

@InputType()
export class SubjectUpdateWithoutScoreInput {

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

    @Field(() => SubjectsOnSchoolsUpdateManyWithoutSubjectNestedInput, {nullable:true})
    schools?: SubjectsOnSchoolsUpdateManyWithoutSubjectNestedInput;

    @Field(() => TopicUpdateManyWithoutSubjectNestedInput, {nullable:true})
    topics?: TopicUpdateManyWithoutSubjectNestedInput;
}
