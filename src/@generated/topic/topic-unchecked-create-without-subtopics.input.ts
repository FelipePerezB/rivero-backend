import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DocUncheckedCreateNestedManyWithoutTopicInput } from '../doc/doc-unchecked-create-nested-many-without-topic.input';

@InputType()
export class TopicUncheckedCreateWithoutSubtopicsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:true})
    subjectId?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => DocUncheckedCreateNestedManyWithoutTopicInput, {nullable:true})
    Docs?: DocUncheckedCreateNestedManyWithoutTopicInput;
}
