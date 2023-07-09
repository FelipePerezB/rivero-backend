import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubjectWhereUniqueInput } from './subject-where-unique.input';
import { Type } from 'class-transformer';
import { SubjectCreateInput } from './subject-create.input';
import { SubjectUpdateInput } from './subject-update.input';

@ArgsType()
export class UpsertOneSubjectArgs {

    @Field(() => SubjectWhereUniqueInput, {nullable:false})
    @Type(() => SubjectWhereUniqueInput)
    where!: SubjectWhereUniqueInput;

    @Field(() => SubjectCreateInput, {nullable:false})
    @Type(() => SubjectCreateInput)
    create!: SubjectCreateInput;

    @Field(() => SubjectUpdateInput, {nullable:false})
    @Type(() => SubjectUpdateInput)
    update!: SubjectUpdateInput;
}
