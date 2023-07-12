import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { GradesOnDocsCreateNestedManyWithoutDocInput } from '../grades-on-docs/grades-on-docs-create-nested-many-without-doc.input';
import { UserCreateNestedOneWithoutDocInput } from '../user/user-create-nested-one-without-doc.input';
import { ScoreCreateNestedManyWithoutDocumentInput } from '../score/score-create-nested-many-without-document.input';

@InputType()
export class DocCreateWithoutTopicInput {

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

    @Field(() => GradesOnDocsCreateNestedManyWithoutDocInput, {nullable:true})
    grades?: GradesOnDocsCreateNestedManyWithoutDocInput;

    @Field(() => UserCreateNestedOneWithoutDocInput, {nullable:false})
    author!: UserCreateNestedOneWithoutDocInput;

    @Field(() => ScoreCreateNestedManyWithoutDocumentInput, {nullable:true})
    Score?: ScoreCreateNestedManyWithoutDocumentInput;
}
