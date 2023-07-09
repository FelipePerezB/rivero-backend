import { registerEnumType } from '@nestjs/graphql';

export enum GradesOnDocsScalarFieldEnum {
    docId = "docId",
    gradeId = "gradeId",
    createdAt = "createdAt",
    updateAt = "updateAt"
}


registerEnumType(GradesOnDocsScalarFieldEnum, { name: 'GradesOnDocsScalarFieldEnum', description: undefined })
