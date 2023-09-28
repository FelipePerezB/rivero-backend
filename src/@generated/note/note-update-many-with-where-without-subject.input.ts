import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NoteScalarWhereInput } from './note-scalar-where.input';
import { Type } from 'class-transformer';
import { NoteUncheckedUpdateManyWithoutSubjectInput } from './note-unchecked-update-many-without-subject.input';

@InputType()
export class NoteUpdateManyWithWhereWithoutSubjectInput {

    @Field(() => NoteScalarWhereInput, {nullable:false})
    @Type(() => NoteScalarWhereInput)
    where!: NoteScalarWhereInput;

    @Field(() => NoteUncheckedUpdateManyWithoutSubjectInput, {nullable:false})
    @Type(() => NoteUncheckedUpdateManyWithoutSubjectInput)
    data!: NoteUncheckedUpdateManyWithoutSubjectInput;
}
