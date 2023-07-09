import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectUpdateWithoutTopicsInput } from './subject-update-without-topics.input';
import { Type } from 'class-transformer';
import { SubjectCreateWithoutTopicsInput } from './subject-create-without-topics.input';

@InputType()
export class SubjectUpsertWithoutTopicsInput {

    @Field(() => SubjectUpdateWithoutTopicsInput, {nullable:false})
    @Type(() => SubjectUpdateWithoutTopicsInput)
    update!: SubjectUpdateWithoutTopicsInput;

    @Field(() => SubjectCreateWithoutTopicsInput, {nullable:false})
    @Type(() => SubjectCreateWithoutTopicsInput)
    create!: SubjectCreateWithoutTopicsInput;
}
