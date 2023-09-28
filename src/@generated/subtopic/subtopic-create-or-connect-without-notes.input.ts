import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubtopicWhereUniqueInput } from './subtopic-where-unique.input';
import { Type } from 'class-transformer';
import { SubtopicCreateWithoutNotesInput } from './subtopic-create-without-notes.input';

@InputType()
export class SubtopicCreateOrConnectWithoutNotesInput {

    @Field(() => SubtopicWhereUniqueInput, {nullable:false})
    @Type(() => SubtopicWhereUniqueInput)
    where!: SubtopicWhereUniqueInput;

    @Field(() => SubtopicCreateWithoutNotesInput, {nullable:false})
    @Type(() => SubtopicCreateWithoutNotesInput)
    create!: SubtopicCreateWithoutNotesInput;
}
