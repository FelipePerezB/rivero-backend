import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradeCreateNestedOneWithoutSchoolsInput } from '../grade/grade-create-nested-one-without-schools.input';
import { SchoolCreateNestedOneWithoutGradesInput } from '../school/school-create-nested-one-without-grades.input';

@InputType()
export class GradesOnSchoolsCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => GradeCreateNestedOneWithoutSchoolsInput, {nullable:false})
    Grade!: GradeCreateNestedOneWithoutSchoolsInput;

    @Field(() => SchoolCreateNestedOneWithoutGradesInput, {nullable:false})
    School!: SchoolCreateNestedOneWithoutGradesInput;
}
