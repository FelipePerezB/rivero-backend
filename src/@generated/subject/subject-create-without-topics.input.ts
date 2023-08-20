import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubtopicCreateNestedManyWithoutSubjectInput } from '../subtopic/subtopic-create-nested-many-without-subject.input';

@InputType()
export class SubjectCreateWithoutTopicsInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    color!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => SubtopicCreateNestedManyWithoutSubjectInput, {nullable:true})
    Subtopic?: SubtopicCreateNestedManyWithoutSubjectInput;
}
