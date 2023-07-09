import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectUpdateWithoutDocsInput } from './subject-update-without-docs.input';
import { Type } from 'class-transformer';
import { SubjectCreateWithoutDocsInput } from './subject-create-without-docs.input';

@InputType()
export class SubjectUpsertWithoutDocsInput {

    @Field(() => SubjectUpdateWithoutDocsInput, {nullable:false})
    @Type(() => SubjectUpdateWithoutDocsInput)
    update!: SubjectUpdateWithoutDocsInput;

    @Field(() => SubjectCreateWithoutDocsInput, {nullable:false})
    @Type(() => SubjectCreateWithoutDocsInput)
    create!: SubjectCreateWithoutDocsInput;
}
