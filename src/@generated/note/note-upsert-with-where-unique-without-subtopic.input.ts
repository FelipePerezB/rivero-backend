import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NoteWhereUniqueInput } from './note-where-unique.input';
import { Type } from 'class-transformer';
import { NoteUpdateWithoutSubtopicInput } from './note-update-without-subtopic.input';
import { NoteCreateWithoutSubtopicInput } from './note-create-without-subtopic.input';

@InputType()
export class NoteUpsertWithWhereUniqueWithoutSubtopicInput {

    @Field(() => NoteWhereUniqueInput, {nullable:false})
    @Type(() => NoteWhereUniqueInput)
    where!: NoteWhereUniqueInput;

    @Field(() => NoteUpdateWithoutSubtopicInput, {nullable:false})
    @Type(() => NoteUpdateWithoutSubtopicInput)
    update!: NoteUpdateWithoutSubtopicInput;

    @Field(() => NoteCreateWithoutSubtopicInput, {nullable:false})
    @Type(() => NoteCreateWithoutSubtopicInput)
    create!: NoteCreateWithoutSubtopicInput;
}
