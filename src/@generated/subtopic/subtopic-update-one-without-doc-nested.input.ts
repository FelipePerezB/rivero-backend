import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubtopicCreateWithoutDocInput } from './subtopic-create-without-doc.input';
import { Type } from 'class-transformer';
import { SubtopicCreateOrConnectWithoutDocInput } from './subtopic-create-or-connect-without-doc.input';
import { SubtopicUpsertWithoutDocInput } from './subtopic-upsert-without-doc.input';
import { SubtopicWhereInput } from './subtopic-where.input';
import { SubtopicWhereUniqueInput } from './subtopic-where-unique.input';
import { SubtopicUpdateToOneWithWhereWithoutDocInput } from './subtopic-update-to-one-with-where-without-doc.input';

@InputType()
export class SubtopicUpdateOneWithoutDocNestedInput {

    @Field(() => SubtopicCreateWithoutDocInput, {nullable:true})
    @Type(() => SubtopicCreateWithoutDocInput)
    create?: SubtopicCreateWithoutDocInput;

    @Field(() => SubtopicCreateOrConnectWithoutDocInput, {nullable:true})
    @Type(() => SubtopicCreateOrConnectWithoutDocInput)
    connectOrCreate?: SubtopicCreateOrConnectWithoutDocInput;

    @Field(() => SubtopicUpsertWithoutDocInput, {nullable:true})
    @Type(() => SubtopicUpsertWithoutDocInput)
    upsert?: SubtopicUpsertWithoutDocInput;

    @Field(() => SubtopicWhereInput, {nullable:true})
    @Type(() => SubtopicWhereInput)
    disconnect?: SubtopicWhereInput;

    @Field(() => SubtopicWhereInput, {nullable:true})
    @Type(() => SubtopicWhereInput)
    delete?: SubtopicWhereInput;

    @Field(() => SubtopicWhereUniqueInput, {nullable:true})
    @Type(() => SubtopicWhereUniqueInput)
    connect?: SubtopicWhereUniqueInput;

    @Field(() => SubtopicUpdateToOneWithWhereWithoutDocInput, {nullable:true})
    @Type(() => SubtopicUpdateToOneWithWhereWithoutDocInput)
    update?: SubtopicUpdateToOneWithWhereWithoutDocInput;
}
