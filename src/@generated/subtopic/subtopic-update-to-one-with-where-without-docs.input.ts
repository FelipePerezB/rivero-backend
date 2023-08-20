import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubtopicWhereInput } from './subtopic-where.input';
import { Type } from 'class-transformer';
import { SubtopicUpdateWithoutDocsInput } from './subtopic-update-without-docs.input';

@InputType()
export class SubtopicUpdateToOneWithWhereWithoutDocsInput {

    @Field(() => SubtopicWhereInput, {nullable:true})
    @Type(() => SubtopicWhereInput)
    where?: SubtopicWhereInput;

    @Field(() => SubtopicUpdateWithoutDocsInput, {nullable:false})
    @Type(() => SubtopicUpdateWithoutDocsInput)
    data!: SubtopicUpdateWithoutDocsInput;
}
