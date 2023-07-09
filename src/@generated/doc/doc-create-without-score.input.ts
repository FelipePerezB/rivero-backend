import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { SubjectCreateNestedOneWithoutDocsInput } from '../subject/subject-create-nested-one-without-docs.input';
import { TopicCreateNestedOneWithoutDocInput } from '../topic/topic-create-nested-one-without-doc.input';
import { GradesOnDocsCreateNestedManyWithoutDocInput } from '../grades-on-docs/grades-on-docs-create-nested-many-without-doc.input';

@InputType()
export class DocCreateWithoutScoreInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    type!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    content!: any;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => SubjectCreateNestedOneWithoutDocsInput, {nullable:false})
    subject!: SubjectCreateNestedOneWithoutDocsInput;

    @Field(() => TopicCreateNestedOneWithoutDocInput, {nullable:false})
    topic!: TopicCreateNestedOneWithoutDocInput;

    @Field(() => GradesOnDocsCreateNestedManyWithoutDocInput, {nullable:true})
    grades?: GradesOnDocsCreateNestedManyWithoutDocInput;
}
