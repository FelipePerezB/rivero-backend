import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    externalId = "externalId",
    email = "email",
    name = "name",
    lastname = "lastname",
    role = "role",
    organizationId = "organizationId",
    createdAt = "createdAt",
    updateAt = "updateAt"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
