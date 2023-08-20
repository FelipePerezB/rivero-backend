import { registerEnumType } from '@nestjs/graphql';

export enum DocTypes {
    EVALUATION = "EVALUATION",
    NOTES = "NOTES",
    EXERCISES = "EXERCISES"
}


registerEnumType(DocTypes, { name: 'DocTypes', description: undefined })
