import { registerEnumType } from '@nestjs/graphql';

export enum Role {
    ADMIN = "ADMIN",
    STUDENT = "STUDENT",
    TEACHER = "TEACHER",
    DIRECTOR = "DIRECTOR"
}


registerEnumType(Role, { name: 'Role', description: undefined })
