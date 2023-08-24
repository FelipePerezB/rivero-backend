import { registerEnumType } from '@nestjs/graphql';

export enum GradeScalarFieldEnum {
    id = "id",
    name = "name",
    createdAt = "createdAt",
    updateAt = "updateAt",
    schoolId = "schoolId"
}


registerEnumType(GradeScalarFieldEnum, { name: 'GradeScalarFieldEnum', description: undefined })
