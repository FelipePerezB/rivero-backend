import { registerEnumType } from '@nestjs/graphql';

export enum DocScalarFieldEnum {
    id = "id",
    privacity = "privacity",
    title = "title",
    type = "type",
    content = "content",
    topicId = "topicId",
    userId = "userId",
    createdAt = "createdAt",
    updateAt = "updateAt",
    subtopicId = "subtopicId"
}


registerEnumType(DocScalarFieldEnum, { name: 'DocScalarFieldEnum', description: undefined })
