import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Privacity } from '../prisma/privacity.enum';
import { DocTypes } from '../prisma/doc-types.enum';
import { ScoreUncheckedCreateNestedManyWithoutDocumentInput } from '../score/score-unchecked-create-nested-many-without-document.input';

@InputType()
export class DocUncheckedCreateWithoutSubjectInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => Int, {nullable:false})
    topicId!: number;

    @Field(() => Int, {nullable:true})
    subtopicId?: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => ScoreUncheckedCreateNestedManyWithoutDocumentInput, {nullable:true})
    Score?: ScoreUncheckedCreateNestedManyWithoutDocumentInput;
}
