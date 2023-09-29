import { registerEnumType } from '@nestjs/graphql';

export enum Types {
    PRACTICE = "PRACTICE",
    DOCUMENT = "DOCUMENT",
    EVALUATION = "EVALUATION"
}


registerEnumType(Types, { name: 'Types', description: undefined })
