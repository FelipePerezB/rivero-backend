import { registerEnumType } from '@nestjs/graphql';

export enum Types {
    PRACTICE = "PRACTICE",
    DOCUMENT = "DOCUMENT"
}


registerEnumType(Types, { name: 'Types', description: undefined })
