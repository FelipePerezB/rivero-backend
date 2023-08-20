import { registerEnumType } from '@nestjs/graphql';

export enum DocScalarFieldEnum {
    id = "id",
    externalId = "externalId",
    privacity = "privacity",
    title = "title",
    type = "type",
    content = "content",
    subjectId = "subjectId",
    topicId = "topicId",
    subtopicId = "subtopicId",
    userId = "userId",
    createdAt = "createdAt",
    updateAt = "updateAt"
}


registerEnumType(DocScalarFieldEnum, { name: 'DocScalarFieldEnum', description: undefined })
