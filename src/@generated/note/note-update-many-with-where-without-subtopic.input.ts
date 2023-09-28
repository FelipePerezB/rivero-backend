import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NoteScalarWhereInput } from './note-scalar-where.input';
import { Type } from 'class-transformer';
import { NoteUncheckedUpdateManyWithoutSubtopicInput } from './note-unchecked-update-many-without-subtopic.input';

@InputType()
export class NoteUpdateManyWithWhereWithoutSubtopicInput {

    @Field(() => NoteScalarWhereInput, {nullable:false})
    @Type(() => NoteScalarWhereInput)
    where!: NoteScalarWhereInput;

    @Field(() => NoteUncheckedUpdateManyWithoutSubtopicInput, {nullable:false})
    @Type(() => NoteUncheckedUpdateManyWithoutSubtopicInput)
    data!: NoteUncheckedUpdateManyWithoutSubtopicInput;
}
