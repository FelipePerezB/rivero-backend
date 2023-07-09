import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradesOnSchoolsGradeIdSchoolIdCompoundUniqueInput } from './grades-on-schools-grade-id-school-id-compound-unique.input';

@InputType()
export class GradesOnSchoolsWhereUniqueInput {

    @Field(() => GradesOnSchoolsGradeIdSchoolIdCompoundUniqueInput, {nullable:true})
    gradeId_schoolId?: GradesOnSchoolsGradeIdSchoolIdCompoundUniqueInput;
}
