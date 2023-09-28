import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NoteWhereUniqueInput } from './note-where-unique.input';
import { Type } from 'class-transformer';
import { NoteCreateInput } from './note-create.input';
import { NoteUpdateInput } from './note-update.input';

@ArgsType()
export class UpsertOneNoteArgs {

    @Field(() => NoteWhereUniqueInput, {nullable:false})
    @Type(() => NoteWhereUniqueInput)
    where!: NoteWhereUniqueInput;

    @Field(() => NoteCreateInput, {nullable:false})
    @Type(() => NoteCreateInput)
    create!: NoteCreateInput;

    @Field(() => NoteUpdateInput, {nullable:false})
    @Type(() => NoteUpdateInput)
    update!: NoteUpdateInput;
}
