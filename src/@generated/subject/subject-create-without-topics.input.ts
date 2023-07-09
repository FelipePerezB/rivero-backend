import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocCreateNestedManyWithoutSubjectInput } from '../doc/doc-create-nested-many-without-subject.input';
import { SubjectsOnSchoolsCreateNestedManyWithoutSubjectInput } from '../subjects-on-schools/subjects-on-schools-create-nested-many-without-subject.input';
import { ScoreCreateNestedManyWithoutSubjectInput } from '../score/score-create-nested-many-without-subject.input';

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

    @Field(() => DocCreateNestedManyWithoutSubjectInput, {nullable:true})
    docs?: DocCreateNestedManyWithoutSubjectInput;

    @Field(() => SubjectsOnSchoolsCreateNestedManyWithoutSubjectInput, {nullable:true})
    schools?: SubjectsOnSchoolsCreateNestedManyWithoutSubjectInput;

    @Field(() => ScoreCreateNestedManyWithoutSubjectInput, {nullable:true})
    Score?: ScoreCreateNestedManyWithoutSubjectInput;
}
