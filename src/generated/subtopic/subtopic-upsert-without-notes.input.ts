import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubtopicUpdateWithoutNotesInput } from './subtopic-update-without-notes.input';
import { Type } from 'class-transformer';
import { SubtopicCreateWithoutNotesInput } from './subtopic-create-without-notes.input';
import { SubtopicWhereInput } from './subtopic-where.input';

@InputType()
export class SubtopicUpsertWithoutNotesInput {

    @Field(() => SubtopicUpdateWithoutNotesInput, {nullable:false})
    @Type(() => SubtopicUpdateWithoutNotesInput)
    update!: SubtopicUpdateWithoutNotesInput;

    @Field(() => SubtopicCreateWithoutNotesInput, {nullable:false})
    @Type(() => SubtopicCreateWithoutNotesInput)
    create!: SubtopicCreateWithoutNotesInput;

    @Field(() => SubtopicWhereInput, {nullable:true})
    @Type(() => SubtopicWhereInput)
    where?: SubtopicWhereInput;
}
