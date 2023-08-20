import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectWhereUniqueInput } from './subject-where-unique.input';
import { Type } from 'class-transformer';
import { SubjectCreateWithoutSubtopicInput } from './subject-create-without-subtopic.input';

@InputType()
export class SubjectCreateOrConnectWithoutSubtopicInput {

    @Field(() => SubjectWhereUniqueInput, {nullable:false})
    @Type(() => SubjectWhereUniqueInput)
    where!: SubjectWhereUniqueInput;

    @Field(() => SubjectCreateWithoutSubtopicInput, {nullable:false})
    @Type(() => SubjectCreateWithoutSubtopicInput)
    create!: SubjectCreateWithoutSubtopicInput;
}
