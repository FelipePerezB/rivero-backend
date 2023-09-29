import { registerEnumType } from '@nestjs/graphql';

export enum NoteScalarFieldEnum {
    id = "id",
    subjectId = "subjectId",
    topicId = "topicId",
    subtopicId = "subtopicId",
    fileId = "fileId",
    type = "type",
    createdAt = "createdAt",
    updateAt = "updateAt"
}


registerEnumType(NoteScalarFieldEnum, { name: 'NoteScalarFieldEnum', description: undefined })
