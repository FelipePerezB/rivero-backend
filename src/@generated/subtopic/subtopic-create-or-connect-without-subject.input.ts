import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubtopicWhereUniqueInput } from './subtopic-where-unique.input';
import { Type } from 'class-transformer';
import { SubtopicCreateWithoutSubjectInput } from './subtopic-create-without-subject.input';

@InputType()
export class SubtopicCreateOrConnectWithoutSubjectInput {

    @Field(() => SubtopicWhereUniqueInput, {nullable:false})
    @Type(() => SubtopicWhereUniqueInput)
    where!: SubtopicWhereUniqueInput;

    @Field(() => SubtopicCreateWithoutSubjectInput, {nullable:false})
    @Type(() => SubtopicCreateWithoutSubjectInput)
    create!: SubtopicCreateWithoutSubjectInput;
}
