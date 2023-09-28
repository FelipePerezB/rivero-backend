import { registerEnumType } from '@nestjs/graphql';

export enum NoteScalarFieldEnum {
    id = "id",
    subjectId = "subjectId",
    topicId = "topicId",
    subtopicId = "subtopicId",
    fileId = "fileId"
}


registerEnumType(NoteScalarFieldEnum, { name: 'NoteScalarFieldEnum', description: undefined })
