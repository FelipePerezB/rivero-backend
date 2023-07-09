import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradeCreateNestedOneWithoutSchoolsInput } from '../grade/grade-create-nested-one-without-schools.input';

@InputType()
export class GradesOnSchoolsCreateWithoutSchoolInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => GradeCreateNestedOneWithoutSchoolsInput, {nullable:false})
    Grade!: GradeCreateNestedOneWithoutSchoolsInput;
}
