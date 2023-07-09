import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GradesOnDocsUncheckedCreateNestedManyWithoutGradeInput } from '../grades-on-docs/grades-on-docs-unchecked-create-nested-many-without-grade.input';
import { GradesOnSchoolsUncheckedCreateNestedManyWithoutGradeInput } from '../grades-on-schools/grades-on-schools-unchecked-create-nested-many-without-grade.input';

@InputType()
export class GradeUncheckedCreateWithoutUsersInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    grade!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => GradesOnDocsUncheckedCreateNestedManyWithoutGradeInput, {nullable:true})
    docs?: GradesOnDocsUncheckedCreateNestedManyWithoutGradeInput;

    @Field(() => GradesOnSchoolsUncheckedCreateNestedManyWithoutGradeInput, {nullable:true})
    schools?: GradesOnSchoolsUncheckedCreateNestedManyWithoutGradeInput;
}
