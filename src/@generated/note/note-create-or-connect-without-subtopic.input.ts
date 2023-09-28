import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NoteWhereUniqueInput } from './note-where-unique.input';
import { Type } from 'class-transformer';
import { NoteCreateWithoutSubtopicInput } from './note-create-without-subtopic.input';

@InputType()
export class NoteCreateOrConnectWithoutSubtopicInput {

    @Field(() => NoteWhereUniqueInput, {nullable:false})
    @Type(() => NoteWhereUniqueInput)
    where!: NoteWhereUniqueInput;

    @Field(() => NoteCreateWithoutSubtopicInput, {nullable:false})
    @Type(() => NoteCreateWithoutSubtopicInput)
    create!: NoteCreateWithoutSubtopicInput;
}
