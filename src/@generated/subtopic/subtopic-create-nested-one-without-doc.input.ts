import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubtopicCreateWithoutDocInput } from './subtopic-create-without-doc.input';
import { Type } from 'class-transformer';
import { SubtopicCreateOrConnectWithoutDocInput } from './subtopic-create-or-connect-without-doc.input';
import { SubtopicWhereUniqueInput } from './subtopic-where-unique.input';

@InputType()
export class SubtopicCreateNestedOneWithoutDocInput {

    @Field(() => SubtopicCreateWithoutDocInput, {nullable:true})
    @Type(() => SubtopicCreateWithoutDocInput)
    create?: SubtopicCreateWithoutDocInput;

    @Field(() => SubtopicCreateOrConnectWithoutDocInput, {nullable:true})
    @Type(() => SubtopicCreateOrConnectWithoutDocInput)
    connectOrCreate?: SubtopicCreateOrConnectWithoutDocInput;

    @Field(() => SubtopicWhereUniqueInput, {nullable:true})
    @Type(() => SubtopicWhereUniqueInput)
    connect?: SubtopicWhereUniqueInput;
}
