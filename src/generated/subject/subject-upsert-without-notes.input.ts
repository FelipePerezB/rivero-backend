import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectUpdateWithoutNotesInput } from './subject-update-without-notes.input';
import { Type } from 'class-transformer';
import { SubjectCreateWithoutNotesInput } from './subject-create-without-notes.input';
import { SubjectWhereInput } from './subject-where.input';

@InputType()
export class SubjectUpsertWithoutNotesInput {

    @Field(() => SubjectUpdateWithoutNotesInput, {nullable:false})
    @Type(() => SubjectUpdateWithoutNotesInput)
    update!: SubjectUpdateWithoutNotesInput;

    @Field(() => SubjectCreateWithoutNotesInput, {nullable:false})
    @Type(() => SubjectCreateWithoutNotesInput)
    create!: SubjectCreateWithoutNotesInput;

    @Field(() => SubjectWhereInput, {nullable:true})
    @Type(() => SubjectWhereInput)
    where?: SubjectWhereInput;
}
