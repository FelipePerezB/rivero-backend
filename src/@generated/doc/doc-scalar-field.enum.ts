import { registerEnumType } from '@nestjs/graphql';

export enum DocScalarFieldEnum {
    id = "id",
    title = "title",
    type = "type",
    content = "content",
    topicId = "topicId",
    userId = "userId",
    createdAt = "createdAt",
    updateAt = "updateAt"
}


registerEnumType(DocScalarFieldEnum, { name: 'DocScalarFieldEnum', description: undefined })
