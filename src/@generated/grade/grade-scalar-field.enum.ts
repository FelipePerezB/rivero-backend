import { registerEnumType } from '@nestjs/graphql';

export enum GradeScalarFieldEnum {
    id = "id",
    grade = "grade",
    createdAt = "createdAt",
    updateAt = "updateAt"
}


registerEnumType(GradeScalarFieldEnum, { name: 'GradeScalarFieldEnum', description: undefined })
