import { registerEnumType } from '@nestjs/graphql';

export enum SchoolScalarFieldEnum {
    id = "id",
    name = "name",
    createdAt = "createdAt",
    updateAt = "updateAt"
}


registerEnumType(SchoolScalarFieldEnum, { name: 'SchoolScalarFieldEnum', description: undefined })
