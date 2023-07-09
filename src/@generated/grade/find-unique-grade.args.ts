import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GradeWhereUniqueInput } from './grade-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueGradeArgs {

    @Field(() => GradeWhereUniqueInput, {nullable:false})
    @Type(() => GradeWhereUniqueInput)
    where!: GradeWhereUniqueInput;
}
