import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NoteWhereUniqueInput } from './note-where-unique.input';
import { Type } from 'class-transformer';
import { NoteUpdateWithoutSubjectInput } from './note-update-without-subject.input';

@InputType()
export class NoteUpdateWithWhereUniqueWithoutSubjectInput {

    @Field(() => NoteWhereUniqueInput, {nullable:false})
    @Type(() => NoteWhereUniqueInput)
    where!: NoteWhereUniqueInput;

    @Field(() => NoteUpdateWithoutSubjectInput, {nullable:false})
    @Type(() => NoteUpdateWithoutSubjectInput)
    data!: NoteUpdateWithoutSubjectInput;
}
