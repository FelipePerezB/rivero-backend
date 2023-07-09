import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectUpdateWithoutSchoolsInput } from './subject-update-without-schools.input';
import { Type } from 'class-transformer';
import { SubjectCreateWithoutSchoolsInput } from './subject-create-without-schools.input';

@InputType()
export class SubjectUpsertWithoutSchoolsInput {

    @Field(() => SubjectUpdateWithoutSchoolsInput, {nullable:false})
    @Type(() => SubjectUpdateWithoutSchoolsInput)
    update!: SubjectUpdateWithoutSchoolsInput;

    @Field(() => SubjectCreateWithoutSchoolsInput, {nullable:false})
    @Type(() => SubjectCreateWithoutSchoolsInput)
    create!: SubjectCreateWithoutSchoolsInput;
}
