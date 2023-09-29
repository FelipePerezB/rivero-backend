import { registerEnumType } from '@nestjs/graphql';

export enum SubjectScalarFieldEnum {
    id = "id",
    name = "name",
    color = "color",
    createdAt = "createdAt",
    updateAt = "updateAt"
}


registerEnumType(SubjectScalarFieldEnum, { name: 'SubjectScalarFieldEnum', description: undefined })
