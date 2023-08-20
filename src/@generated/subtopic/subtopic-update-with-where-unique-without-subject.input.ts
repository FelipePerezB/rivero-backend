import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubtopicWhereUniqueInput } from './subtopic-where-unique.input';
import { Type } from 'class-transformer';
import { SubtopicUpdateWithoutSubjectInput } from './subtopic-update-without-subject.input';

@InputType()
export class SubtopicUpdateWithWhereUniqueWithoutSubjectInput {

    @Field(() => SubtopicWhereUniqueInput, {nullable:false})
    @Type(() => SubtopicWhereUniqueInput)
    where!: SubtopicWhereUniqueInput;

    @Field(() => SubtopicUpdateWithoutSubjectInput, {nullable:false})
    @Type(() => SubtopicUpdateWithoutSubjectInput)
    data!: SubtopicUpdateWithoutSubjectInput;
}
