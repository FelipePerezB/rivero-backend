import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SubjectsOnSchoolsUncheckedCreateNestedManyWithoutSubjectInput } from '../subjects-on-schools/subjects-on-schools-unchecked-create-nested-many-without-subject.input';
import { TopicUncheckedCreateNestedManyWithoutSubjectInput } from '../topic/topic-unchecked-create-nested-many-without-subject.input';
import { ScoreUncheckedCreateNestedManyWithoutSubjectInput } from '../score/score-unchecked-create-nested-many-without-subject.input';

@InputType()
export class SubjectUncheckedCreateWithoutDocsInput {

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

    @Field(() => SubjectsOnSchoolsUncheckedCreateNestedManyWithoutSubjectInput, {nullable:true})
    schools?: SubjectsOnSchoolsUncheckedCreateNestedManyWithoutSubjectInput;

    @Field(() => TopicUncheckedCreateNestedManyWithoutSubjectInput, {nullable:true})
    topics?: TopicUncheckedCreateNestedManyWithoutSubjectInput;

    @Field(() => ScoreUncheckedCreateNestedManyWithoutSubjectInput, {nullable:true})
    Score?: ScoreUncheckedCreateNestedManyWithoutSubjectInput;
}
