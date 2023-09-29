import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubtopicWhereUniqueInput } from './subtopic-where-unique.input';
import { Type } from 'class-transformer';
import { SubtopicUpdateWithoutSubjectInput } from './subtopic-update-without-subject.input';
import { SubtopicCreateWithoutSubjectInput } from './subtopic-create-without-subject.input';

@InputType()
export class SubtopicUpsertWithWhereUniqueWithoutSubjectInput {

    @Field(() => SubtopicWhereUniqueInput, {nullable:false})
    @Type(() => SubtopicWhereUniqueInput)
    where!: SubtopicWhereUniqueInput;

    @Field(() => SubtopicUpdateWithoutSubjectInput, {nullable:false})
    @Type(() => SubtopicUpdateWithoutSubjectInput)
    update!: SubtopicUpdateWithoutSubjectInput;

    @Field(() => SubtopicCreateWithoutSubjectInput, {nullable:false})
    @Type(() => SubtopicCreateWithoutSubjectInput)
    create!: SubtopicCreateWithoutSubjectInput;
}
