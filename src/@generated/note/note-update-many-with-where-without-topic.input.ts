import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NoteScalarWhereInput } from './note-scalar-where.input';
import { Type } from 'class-transformer';
import { NoteUncheckedUpdateManyWithoutTopicInput } from './note-unchecked-update-many-without-topic.input';

@InputType()
export class NoteUpdateManyWithWhereWithoutTopicInput {

    @Field(() => NoteScalarWhereInput, {nullable:false})
    @Type(() => NoteScalarWhereInput)
    where!: NoteScalarWhereInput;

    @Field(() => NoteUncheckedUpdateManyWithoutTopicInput, {nullable:false})
    @Type(() => NoteUncheckedUpdateManyWithoutTopicInput)
    data!: NoteUncheckedUpdateManyWithoutTopicInput;
}
