import { registerEnumType } from '@nestjs/graphql';

export enum TopicScalarFieldEnum {
    id = "id",
    name = "name",
    subjectId = "subjectId",
    createdAt = "createdAt",
    updateAt = "updateAt"
}


registerEnumType(TopicScalarFieldEnum, { name: 'TopicScalarFieldEnum', description: undefined })
