import { registerEnumType } from '@nestjs/graphql';

export enum DocScalarFieldEnum {
    id = "id",
    title = "title",
    type = "type",
    content = "content",
    createdAt = "createdAt",
    updateAt = "updateAt",
    subjectId = "subjectId",
    topicId = "topicId"
}


registerEnumType(DocScalarFieldEnum, { name: 'DocScalarFieldEnum', description: undefined })
