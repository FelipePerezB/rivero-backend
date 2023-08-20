import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubtopicUpdateWithoutDocsInput } from './subtopic-update-without-docs.input';
import { Type } from 'class-transformer';
import { SubtopicCreateWithoutDocsInput } from './subtopic-create-without-docs.input';
import { SubtopicWhereInput } from './subtopic-where.input';

@InputType()
export class SubtopicUpsertWithoutDocsInput {

    @Field(() => SubtopicUpdateWithoutDocsInput, {nullable:false})
    @Type(() => SubtopicUpdateWithoutDocsInput)
    update!: SubtopicUpdateWithoutDocsInput;

    @Field(() => SubtopicCreateWithoutDocsInput, {nullable:false})
    @Type(() => SubtopicCreateWithoutDocsInput)
    create!: SubtopicCreateWithoutDocsInput;

    @Field(() => SubtopicWhereInput, {nullable:true})
    @Type(() => SubtopicWhereInput)
    where?: SubtopicWhereInput;
}
