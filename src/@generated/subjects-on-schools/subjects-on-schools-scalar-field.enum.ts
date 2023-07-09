import { registerEnumType } from '@nestjs/graphql';

export enum SubjectsOnSchoolsScalarFieldEnum {
    subjectId = "subjectId",
    schoolId = "schoolId",
    createdAt = "createdAt",
    updateAt = "updateAt"
}


registerEnumType(SubjectsOnSchoolsScalarFieldEnum, { name: 'SubjectsOnSchoolsScalarFieldEnum', description: undefined })
