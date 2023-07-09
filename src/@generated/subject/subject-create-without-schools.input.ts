import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocCreateNestedManyWithoutSubjectInput } from '../doc/doc-create-nested-many-without-subject.input';
import { TopicCreateNestedManyWithoutSubjectInput } from '../topic/topic-create-nested-many-without-subject.input';
import { ScoreCreateNestedManyWithoutSubjectInput } from '../score/score-create-nested-many-without-subject.input';

@InputType()
export class SubjectCreateWithoutSchoolsInput {

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

    @Field(() => TopicCreateNestedManyWithoutSubjectInput, {nullable:true})
    topics?: TopicCreateNestedManyWithoutSubjectInput;

    @Field(() => ScoreCreateNestedManyWithoutSubjectInput, {nullable:true})
    Score?: ScoreCreateNestedManyWithoutSubjectInput;
}
