import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GradeUpdateInput } from './grade-update.input';
import { Type } from 'class-transformer';
import { GradeWhereUniqueInput } from './grade-where-unique.input';

@ArgsType()
export class UpdateOneGradeArgs {

    @Field(() => GradeUpdateInput, {nullable:false})
    @Type(() => GradeUpdateInput)
    data!: GradeUpdateInput;

    @Field(() => GradeWhereUniqueInput, {nullable:false})
    @Type(() => GradeWhereUniqueInput)
    where!: GradeWhereUniqueInput;
}
