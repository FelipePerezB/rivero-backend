import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DocUncheckedCreateNestedManyWithoutTopicInput } from '../doc/doc-unchecked-create-nested-many-without-topic.input';

@InputType()
export class TopicUncheckedCreateWithoutSubtopicInput {

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

    @Field(() => DocUncheckedCreateNestedManyWithoutTopicInput, {nullable:true})
    Doc?: DocUncheckedCreateNestedManyWithoutTopicInput;
}
