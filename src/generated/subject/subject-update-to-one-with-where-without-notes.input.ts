import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectWhereInput } from './subject-where.input';
import { Type } from 'class-transformer';
import { SubjectUpdateWithoutNotesInput } from './subject-update-without-notes.input';

@InputType()
export class SubjectUpdateToOneWithWhereWithoutNotesInput {

    @Field(() => SubjectWhereInput, {nullable:true})
    @Type(() => SubjectWhereInput)
    where?: SubjectWhereInput;

    @Field(() => SubjectUpdateWithoutNotesInput, {nullable:false})
    @Type(() => SubjectUpdateWithoutNotesInput)
    data!: SubjectUpdateWithoutNotesInput;
}
