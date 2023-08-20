import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectUpdateWithoutSubtopicInput } from './subject-update-without-subtopic.input';
import { Type } from 'class-transformer';
import { SubjectCreateWithoutSubtopicInput } from './subject-create-without-subtopic.input';
import { SubjectWhereInput } from './subject-where.input';

@InputType()
export class SubjectUpsertWithoutSubtopicInput {

    @Field(() => SubjectUpdateWithoutSubtopicInput, {nullable:false})
    @Type(() => SubjectUpdateWithoutSubtopicInput)
    update!: SubjectUpdateWithoutSubtopicInput;

    @Field(() => SubjectCreateWithoutSubtopicInput, {nullable:false})
    @Type(() => SubjectCreateWithoutSubtopicInput)
    create!: SubjectCreateWithoutSubtopicInput;

    @Field(() => SubjectWhereInput, {nullable:true})
    @Type(() => SubjectWhereInput)
    where?: SubjectWhereInput;
}
