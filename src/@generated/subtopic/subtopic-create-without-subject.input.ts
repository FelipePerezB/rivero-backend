import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TopicCreateNestedOneWithoutSubtopicInput } from '../topic/topic-create-nested-one-without-subtopic.input';
import { DocCreateNestedManyWithoutSubtopicInput } from '../doc/doc-create-nested-many-without-subtopic.input';

@InputType()
export class SubtopicCreateWithoutSubjectInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => TopicCreateNestedOneWithoutSubtopicInput, {nullable:false})
    Topic!: TopicCreateNestedOneWithoutSubtopicInput;

    @Field(() => DocCreateNestedManyWithoutSubtopicInput, {nullable:true})
    Doc?: DocCreateNestedManyWithoutSubtopicInput;
}
