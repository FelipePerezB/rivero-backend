import { registerEnumType } from '@nestjs/graphql';

export enum Privacity {
    PUBLIC = "PUBLIC",
    PRIVATE = "PRIVATE",
    RESTRICTED = "RESTRICTED"
}


registerEnumType(Privacity, { name: 'Privacity', description: undefined })
