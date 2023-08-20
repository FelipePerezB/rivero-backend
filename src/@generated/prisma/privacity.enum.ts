import { registerEnumType } from '@nestjs/graphql';

export enum Privacity {
    PUBLIC = "PUBLIC",
    PRIVATE = "PRIVATE"
}


registerEnumType(Privacity, { name: 'Privacity', description: undefined })
