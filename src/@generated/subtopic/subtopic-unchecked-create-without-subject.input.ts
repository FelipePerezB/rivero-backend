import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DocUncheckedCreateNestedManyWithoutSubtopicInput } from '../doc/doc-unchecked-create-nested-many-without-subtopic.input';

@InputType()
export class SubtopicUncheckedCreateWithoutSubjectInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => Int, {nullable:false})
    topicId!: number;

    @Field(() => DocUncheckedCreateNestedManyWithoutSubtopicInput, {nullable:true})
    Docs?: DocUncheckedCreateNestedManyWithoutSubtopicInput;
}
