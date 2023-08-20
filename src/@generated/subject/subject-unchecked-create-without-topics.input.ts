import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SubtopicUncheckedCreateNestedManyWithoutSubjectInput } from '../subtopic/subtopic-unchecked-create-nested-many-without-subject.input';
import { DocUncheckedCreateNestedManyWithoutSubjectInput } from '../doc/doc-unchecked-create-nested-many-without-subject.input';

@InputType()
export class SubjectUncheckedCreateWithoutTopicsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    color!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => SubtopicUncheckedCreateNestedManyWithoutSubjectInput, {nullable:true})
    Subtopic?: SubtopicUncheckedCreateNestedManyWithoutSubjectInput;

    @Field(() => DocUncheckedCreateNestedManyWithoutSubjectInput, {nullable:true})
    Docs?: DocUncheckedCreateNestedManyWithoutSubjectInput;
}
