import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Privacity } from '../prisma/privacity.enum';
import { DocTypes } from '../prisma/doc-types.enum';
import { TopicCreateNestedOneWithoutDocInput } from '../topic/topic-create-nested-one-without-doc.input';
import { UserCreateNestedOneWithoutDocInput } from '../user/user-create-nested-one-without-doc.input';
import { SubtopicCreateNestedOneWithoutDocInput } from '../subtopic/subtopic-create-nested-one-without-doc.input';

@InputType()
export class DocCreateWithoutScoreInput {

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

    @Field(() => TopicCreateNestedOneWithoutDocInput, {nullable:false})
    topic!: TopicCreateNestedOneWithoutDocInput;

    @Field(() => UserCreateNestedOneWithoutDocInput, {nullable:false})
    author!: UserCreateNestedOneWithoutDocInput;

    @Field(() => SubtopicCreateNestedOneWithoutDocInput, {nullable:true})
    Subtopic?: SubtopicCreateNestedOneWithoutDocInput;
}
