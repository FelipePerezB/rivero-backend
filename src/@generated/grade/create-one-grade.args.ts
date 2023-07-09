import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GradeCreateInput } from './grade-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneGradeArgs {

    @Field(() => GradeCreateInput, {nullable:false})
    @Type(() => GradeCreateInput)
    data!: GradeCreateInput;
}
