import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubtopicCreateWithoutNotesInput } from './subtopic-create-without-notes.input';
import { Type } from 'class-transformer';
import { SubtopicCreateOrConnectWithoutNotesInput } from './subtopic-create-or-connect-without-notes.input';
import { SubtopicWhereUniqueInput } from './subtopic-where-unique.input';

@InputType()
export class SubtopicCreateNestedOneWithoutNotesInput {

    @Field(() => SubtopicCreateWithoutNotesInput, {nullable:true})
    @Type(() => SubtopicCreateWithoutNotesInput)
    create?: SubtopicCreateWithoutNotesInput;

    @Field(() => SubtopicCreateOrConnectWithoutNotesInput, {nullable:true})
    @Type(() => SubtopicCreateOrConnectWithoutNotesInput)
    connectOrCreate?: SubtopicCreateOrConnectWithoutNotesInput;

    @Field(() => SubtopicWhereUniqueInput, {nullable:true})
    @Type(() => SubtopicWhereUniqueInput)
    connect?: SubtopicWhereUniqueInput;
}
