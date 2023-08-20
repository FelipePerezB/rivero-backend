import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Privacity } from '../prisma/privacity.enum';
import { DocTypes } from '../prisma/doc-types.enum';
import { SubjectCreateNestedOneWithoutDocsInput } from '../subject/subject-create-nested-one-without-docs.input';
import { TopicCreateNestedOneWithoutDocsInput } from '../topic/topic-create-nested-one-without-docs.input';
import { SubtopicCreateNestedOneWithoutDocsInput } from '../subtopic/subtopic-create-nested-one-without-docs.input';
import { UserCreateNestedOneWithoutDocInput } from '../user/user-create-nested-one-without-doc.input';

@InputType()
export class DocCreateWithoutScoreInput {

    @Field(() => String, {nullable:false})
    externalId!: string;

    @Field(() => Privacity, {nullable:false})
    privacity!: keyof typeof Privacity;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => DocTypes, {nullable:false})
    type!: keyof typeof DocTypes;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => SubjectCreateNestedOneWithoutDocsInput, {nullable:false})
    Subject!: SubjectCreateNestedOneWithoutDocsInput;

    @Field(() => TopicCreateNestedOneWithoutDocsInput, {nullable:false})
    Topic!: TopicCreateNestedOneWithoutDocsInput;

    @Field(() => SubtopicCreateNestedOneWithoutDocsInput, {nullable:true})
    Subtopic?: SubtopicCreateNestedOneWithoutDocsInput;

    @Field(() => UserCreateNestedOneWithoutDocInput, {nullable:false})
    Author!: UserCreateNestedOneWithoutDocInput;
}
