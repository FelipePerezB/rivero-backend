import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NoteWhereUniqueInput } from './note-where-unique.input';
import { Type } from 'class-transformer';
import { NoteUpdateWithoutSubjectInput } from './note-update-without-subject.input';
import { NoteCreateWithoutSubjectInput } from './note-create-without-subject.input';

@InputType()
export class NoteUpsertWithWhereUniqueWithoutSubjectInput {

    @Field(() => NoteWhereUniqueInput, {nullable:false})
    @Type(() => NoteWhereUniqueInput)
    where!: NoteWhereUniqueInput;

    @Field(() => NoteUpdateWithoutSubjectInput, {nullable:false})
    @Type(() => NoteUpdateWithoutSubjectInput)
    update!: NoteUpdateWithoutSubjectInput;

    @Field(() => NoteCreateWithoutSubjectInput, {nullable:false})
    @Type(() => NoteCreateWithoutSubjectInput)
    create!: NoteCreateWithoutSubjectInput;
}
