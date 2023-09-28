import { registerEnumType } from '@nestjs/graphql';

export enum FileScalarFieldEnum {
    id = "id",
    externalId = "externalId",
    privacity = "privacity",
    title = "title",
    content = "content",
    authorId = "authorId",
    createdAt = "createdAt",
    updateAt = "updateAt"
}


registerEnumType(FileScalarFieldEnum, { name: 'FileScalarFieldEnum', description: undefined })
