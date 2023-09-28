import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectWhereUniqueInput } from './subject-where-unique.input';
import { Type } from 'class-transformer';
import { SubjectCreateWithoutNotesInput } from './subject-create-without-notes.input';

@InputType()
export class SubjectCreateOrConnectWithoutNotesInput {

    @Field(() => SubjectWhereUniqueInput, {nullable:false})
    @Type(() => SubjectWhereUniqueInput)
    where!: SubjectWhereUniqueInput;

    @Field(() => SubjectCreateWithoutNotesInput, {nullable:false})
    @Type(() => SubjectCreateWithoutNotesInput)
    create!: SubjectCreateWithoutNotesInput;
}
