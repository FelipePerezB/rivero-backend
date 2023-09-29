import { registerEnumType } from '@nestjs/graphql';

export enum SubtopicScalarFieldEnum {
    id = "id",
    name = "name",
    subjectId = "subjectId",
    topicId = "topicId",
    createdAt = "createdAt",
    updateAt = "updateAt"
}


registerEnumType(SubtopicScalarFieldEnum, { name: 'SubtopicScalarFieldEnum', description: undefined })
