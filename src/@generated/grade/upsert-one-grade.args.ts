import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GradeWhereUniqueInput } from './grade-where-unique.input';
import { Type } from 'class-transformer';
import { GradeCreateInput } from './grade-create.input';
import { GradeUpdateInput } from './grade-update.input';

@ArgsType()
export class UpsertOneGradeArgs {

    @Field(() => GradeWhereUniqueInput, {nullable:false})
    @Type(() => GradeWhereUniqueInput)
    where!: GradeWhereUniqueInput;

    @Field(() => GradeCreateInput, {nullable:false})
    @Type(() => GradeCreateInput)
    create!: GradeCreateInput;

    @Field(() => GradeUpdateInput, {nullable:false})
    @Type(() => GradeUpdateInput)
    update!: GradeUpdateInput;
}
