import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubtopicWhereUniqueInput } from './subtopic-where-unique.input';
import { Type } from 'class-transformer';
import { SubtopicCreateWithoutDocsInput } from './subtopic-create-without-docs.input';

@InputType()
export class SubtopicCreateOrConnectWithoutDocsInput {

    @Field(() => SubtopicWhereUniqueInput, {nullable:false})
    @Type(() => SubtopicWhereUniqueInput)
    where!: SubtopicWhereUniqueInput;

    @Field(() => SubtopicCreateWithoutDocsInput, {nullable:false})
    @Type(() => SubtopicCreateWithoutDocsInput)
    create!: SubtopicCreateWithoutDocsInput;
}
