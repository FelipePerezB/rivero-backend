import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubjectCreateInput } from './subject-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneSubjectArgs {

    @Field(() => SubjectCreateInput, {nullable:false})
    @Type(() => SubjectCreateInput)
    data!: SubjectCreateInput;
}
