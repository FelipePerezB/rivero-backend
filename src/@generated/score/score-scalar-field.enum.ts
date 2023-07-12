import { registerEnumType } from '@nestjs/graphql';

export enum ScoreScalarFieldEnum {
    id = "id",
    score = "score",
    userId = "userId",
    alternatives = "alternatives",
    docId = "docId",
    createdAt = "createdAt",
    updateAt = "updateAt"
}


registerEnumType(ScoreScalarFieldEnum, { name: 'ScoreScalarFieldEnum', description: undefined })
