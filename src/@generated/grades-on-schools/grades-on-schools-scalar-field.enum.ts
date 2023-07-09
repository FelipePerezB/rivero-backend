import { registerEnumType } from '@nestjs/graphql';

export enum GradesOnSchoolsScalarFieldEnum {
    gradeId = "gradeId",
    schoolId = "schoolId",
    createdAt = "createdAt",
    updateAt = "updateAt"
}


registerEnumType(GradesOnSchoolsScalarFieldEnum, { name: 'GradesOnSchoolsScalarFieldEnum', description: undefined })
