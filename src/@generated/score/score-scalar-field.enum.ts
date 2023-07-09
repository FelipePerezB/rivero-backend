import { registerEnumType } from '@nestjs/graphql';

export enum ScoreScalarFieldEnum {
    id = "id",
    score = "score",
    subjectId = "subjectId",
    topicId = "topicId",
    userId = "userId",
    correct = "correct",
    total = "total",
    wrong = "wrong",
    'null' = "null",
    docId = "docId",
    alternatives = "alternatives",
    createdAt = "createdAt",
    updateAt = "updateAt"
}


registerEnumType(ScoreScalarFieldEnum, { name: 'ScoreScalarFieldEnum', description: undefined })
