import { registerEnumType } from '@nestjs/graphql';

export enum SubtopicScalarFieldEnum {
    id = "id",
    name = "name",
    createdAt = "createdAt",
    updateAt = "updateAt",
    subjectId = "subjectId",
    topicId = "topicId"
}


registerEnumType(SubtopicScalarFieldEnum, { name: 'SubtopicScalarFieldEnum', description: undefined })
