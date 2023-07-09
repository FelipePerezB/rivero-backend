import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    email = "email",
    name = "name",
    lastname = "lastname",
    stars = "stars",
    password = "password",
    role = "role",
    nickname = "nickname",
    createdAt = "createdAt",
    updateAt = "updateAt",
    gradeId = "gradeId",
    schoolId = "schoolId"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
