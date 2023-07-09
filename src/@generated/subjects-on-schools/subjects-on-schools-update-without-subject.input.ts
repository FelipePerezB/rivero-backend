import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { SchoolUpdateOneWithoutSubjectsNestedInput } from '../school/school-update-one-without-subjects-nested.input';

@InputType()
export class SubjectsOnSchoolsUpdateWithoutSubjectInput {

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updateAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => SchoolUpdateOneWithoutSubjectsNestedInput, {nullable:true})
    School?: SchoolUpdateOneWithoutSubjectsNestedInput;
}
