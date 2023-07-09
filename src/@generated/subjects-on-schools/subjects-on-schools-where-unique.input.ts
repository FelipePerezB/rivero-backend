import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectsOnSchoolsSubjectIdSchoolIdCompoundUniqueInput } from './subjects-on-schools-subject-id-school-id-compound-unique.input';

@InputType()
export class SubjectsOnSchoolsWhereUniqueInput {

    @Field(() => SubjectsOnSchoolsSubjectIdSchoolIdCompoundUniqueInput, {nullable:true})
    subjectId_schoolId?: SubjectsOnSchoolsSubjectIdSchoolIdCompoundUniqueInput;
}
