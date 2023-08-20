import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubtopicCreateWithoutDocsInput } from './subtopic-create-without-docs.input';
import { Type } from 'class-transformer';
import { SubtopicCreateOrConnectWithoutDocsInput } from './subtopic-create-or-connect-without-docs.input';
import { SubtopicUpsertWithoutDocsInput } from './subtopic-upsert-without-docs.input';
import { SubtopicWhereInput } from './subtopic-where.input';
import { SubtopicWhereUniqueInput } from './subtopic-where-unique.input';
import { SubtopicUpdateToOneWithWhereWithoutDocsInput } from './subtopic-update-to-one-with-where-without-docs.input';

@InputType()
export class SubtopicUpdateOneWithoutDocsNestedInput {

    @Field(() => SubtopicCreateWithoutDocsInput, {nullable:true})
    @Type(() => SubtopicCreateWithoutDocsInput)
    create?: SubtopicCreateWithoutDocsInput;

    @Field(() => SubtopicCreateOrConnectWithoutDocsInput, {nullable:true})
    @Type(() => SubtopicCreateOrConnectWithoutDocsInput)
    connectOrCreate?: SubtopicCreateOrConnectWithoutDocsInput;

    @Field(() => SubtopicUpsertWithoutDocsInput, {nullable:true})
    @Type(() => SubtopicUpsertWithoutDocsInput)
    upsert?: SubtopicUpsertWithoutDocsInput;

    @Field(() => SubtopicWhereInput, {nullable:true})
    @Type(() => SubtopicWhereInput)
    disconnect?: SubtopicWhereInput;

    @Field(() => SubtopicWhereInput, {nullable:true})
    @Type(() => SubtopicWhereInput)
    delete?: SubtopicWhereInput;

    @Field(() => SubtopicWhereUniqueInput, {nullable:true})
    @Type(() => SubtopicWhereUniqueInput)
    connect?: SubtopicWhereUniqueInput;

    @Field(() => SubtopicUpdateToOneWithWhereWithoutDocsInput, {nullable:true})
    @Type(() => SubtopicUpdateToOneWithWhereWithoutDocsInput)
    update?: SubtopicUpdateToOneWithWhereWithoutDocsInput;
}
