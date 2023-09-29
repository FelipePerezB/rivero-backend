import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NoteWhereUniqueInput } from './note-where-unique.input';
import { Type } from 'class-transformer';
import { NoteCreateWithoutSubjectInput } from './note-create-without-subject.input';

@InputType()
export class NoteCreateOrConnectWithoutSubjectInput {

    @Field(() => NoteWhereUniqueInput, {nullable:false})
    @Type(() => NoteWhereUniqueInput)
    where!: NoteWhereUniqueInput;

    @Field(() => NoteCreateWithoutSubjectInput, {nullable:false})
    @Type(() => NoteCreateWithoutSubjectInput)
    create!: NoteCreateWithoutSubjectInput;
}
