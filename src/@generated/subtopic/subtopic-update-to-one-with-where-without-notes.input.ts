import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubtopicWhereInput } from './subtopic-where.input';
import { Type } from 'class-transformer';
import { SubtopicUpdateWithoutNotesInput } from './subtopic-update-without-notes.input';

@InputType()
export class SubtopicUpdateToOneWithWhereWithoutNotesInput {

    @Field(() => SubtopicWhereInput, {nullable:true})
    @Type(() => SubtopicWhereInput)
    where?: SubtopicWhereInput;

    @Field(() => SubtopicUpdateWithoutNotesInput, {nullable:false})
    @Type(() => SubtopicUpdateWithoutNotesInput)
    data!: SubtopicUpdateWithoutNotesInput;
}
