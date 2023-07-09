import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { SubjectUpdateOneWithoutSchoolsNestedInput } from '../subject/subject-update-one-without-schools-nested.input';
import { SchoolUpdateOneWithoutSubjectsNestedInput } from '../school/school-update-one-without-subjects-nested.input';

@InputType()
export class SubjectsOnSchoolsUpdateInput {

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => SubjectUpdateOneWithoutSchoolsNestedInput, {nullable:true})
    Subject?: SubjectUpdateOneWithoutSchoolsNestedInput;

    @Field(() => SchoolUpdateOneWithoutSubjectsNestedInput, {nullable:true})
    School?: SchoolUpdateOneWithoutSubjectsNestedInput;
}
