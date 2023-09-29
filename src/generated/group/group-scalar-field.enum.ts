import { registerEnumType } from '@nestjs/graphql';

export enum GroupScalarFieldEnum {
    id = "id",
    name = "name",
    organizationId = "organizationId",
    createdAt = "createdAt",
    updateAt = "updateAt"
}


registerEnumType(GroupScalarFieldEnum, { name: 'GroupScalarFieldEnum', description: undefined })
