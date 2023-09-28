import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NoteWhereInput } from '../note/note-where.input';

@InputType()
export class NoteNullableRelationFilter {

    @Field(() => NoteWhereInput, {nullable:true})
    is?: NoteWhereInput;

    @Field(() => NoteWhereInput, {nullable:true})
    isNot?: NoteWhereInput;
}
