import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DocUncheckedCreateNestedManyWithoutSubtopicInput } from '../doc/doc-unchecked-create-nested-many-without-subtopic.input';

@InputType()
export class SubtopicUncheckedCreateWithoutTopicInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => Int, {nullable:true})
    subjectId?: number;

    @Field(() => DocUncheckedCreateNestedManyWithoutSubtopicInput, {nullable:true})
    Doc?: DocUncheckedCreateNestedManyWithoutSubtopicInput;
}
