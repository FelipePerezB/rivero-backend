import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubtopicCreateWithoutNotesInput } from './subtopic-create-without-notes.input';
import { Type } from 'class-transformer';
import { SubtopicCreateOrConnectWithoutNotesInput } from './subtopic-create-or-connect-without-notes.input';
import { SubtopicUpsertWithoutNotesInput } from './subtopic-upsert-without-notes.input';
import { SubtopicWhereInput } from './subtopic-where.input';
import { SubtopicWhereUniqueInput } from './subtopic-where-unique.input';
import { SubtopicUpdateToOneWithWhereWithoutNotesInput } from './subtopic-update-to-one-with-where-without-notes.input';

@InputType()
export class SubtopicUpdateOneWithoutNotesNestedInput {

    @Field(() => SubtopicCreateWithoutNotesInput, {nullable:true})
    @Type(() => SubtopicCreateWithoutNotesInput)
    create?: SubtopicCreateWithoutNotesInput;

    @Field(() => SubtopicCreateOrConnectWithoutNotesInput, {nullable:true})
    @Type(() => SubtopicCreateOrConnectWithoutNotesInput)
    connectOrCreate?: SubtopicCreateOrConnectWithoutNotesInput;

    @Field(() => SubtopicUpsertWithoutNotesInput, {nullable:true})
    @Type(() => SubtopicUpsertWithoutNotesInput)
    upsert?: SubtopicUpsertWithoutNotesInput;

    @Field(() => SubtopicWhereInput, {nullable:true})
    @Type(() => SubtopicWhereInput)
    disconnect?: SubtopicWhereInput;

    @Field(() => SubtopicWhereInput, {nullable:true})
    @Type(() => SubtopicWhereInput)
    delete?: SubtopicWhereInput;

    @Field(() => SubtopicWhereUniqueInput, {nullable:true})
    @Type(() => SubtopicWhereUniqueInput)
    connect?: SubtopicWhereUniqueInput;

    @Field(() => SubtopicUpdateToOneWithWhereWithoutNotesInput, {nullable:true})
    @Type(() => SubtopicUpdateToOneWithWhereWithoutNotesInput)
    update?: SubtopicUpdateToOneWithWhereWithoutNotesInput;
}
