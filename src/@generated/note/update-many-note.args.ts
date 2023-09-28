import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NoteUncheckedUpdateManyInput } from './note-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { NoteWhereInput } from './note-where.input';

@ArgsType()
export class UpdateManyNoteArgs {

    @Field(() => NoteUncheckedUpdateManyInput, {nullable:false})
    @Type(() => NoteUncheckedUpdateManyInput)
    data!: NoteUncheckedUpdateManyInput;

    @Field(() => NoteWhereInput, {nullable:true})
    @Type(() => NoteWhereInput)
    where?: NoteWhereInput;
}
