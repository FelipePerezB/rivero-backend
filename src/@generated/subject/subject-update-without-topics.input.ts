import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { DocUpdateManyWithoutSubjectNestedInput } from '../doc/doc-update-many-without-subject-nested.input';
import { SubjectsOnSchoolsUpdateManyWithoutSubjectNestedInput } from '../subjects-on-schools/subjects-on-schools-update-many-without-subject-nested.input';
import { ScoreUpdateManyWithoutSubjectNestedInput } from '../score/score-update-many-without-subject-nested.input';

@InputType()
export class SubjectUpdateWithoutTopicsInput {

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

    @Field(() => ScoreUpdateManyWithoutSubjectNestedInput, {nullable:true})
    Score?: ScoreUpdateManyWithoutSubjectNestedInput;
}
