import { registerEnumType } from '@nestjs/graphql';

export enum TopicScalarFieldEnum {
    id = "id",
    name = "name",
    createdAt = "createdAt",
    updateAt = "updateAt",
    subjectId = "subjectId"
}


registerEnumType(TopicScalarFieldEnum, { name: 'TopicScalarFieldEnum', description: undefined })
