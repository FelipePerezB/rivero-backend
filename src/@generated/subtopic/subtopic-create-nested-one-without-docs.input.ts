import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubtopicCreateWithoutDocsInput } from './subtopic-create-without-docs.input';
import { Type } from 'class-transformer';
import { SubtopicCreateOrConnectWithoutDocsInput } from './subtopic-create-or-connect-without-docs.input';
import { SubtopicWhereUniqueInput } from './subtopic-where-unique.input';

@InputType()
export class SubtopicCreateNestedOneWithoutDocsInput {

    @Field(() => SubtopicCreateWithoutDocsInput, {nullable:true})
    @Type(() => SubtopicCreateWithoutDocsInput)
    create?: SubtopicCreateWithoutDocsInput;

    @Field(() => SubtopicCreateOrConnectWithoutDocsInput, {nullable:true})
    @Type(() => SubtopicCreateOrConnectWithoutDocsInput)
    connectOrCreate?: SubtopicCreateOrConnectWithoutDocsInput;

    @Field(() => SubtopicWhereUniqueInput, {nullable:true})
    @Type(() => SubtopicWhereUniqueInput)
    connect?: SubtopicWhereUniqueInput;
}
