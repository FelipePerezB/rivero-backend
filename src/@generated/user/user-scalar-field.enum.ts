import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    externalId = "externalId",
    email = "email",
    username = "username",
    role = "role",
    gradeId = "gradeId",
    schoolId = "schoolId",
    createdAt = "createdAt",
    updateAt = "updateAt"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
