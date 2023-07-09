import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubjectUpdateInput } from './subject-update.input';
import { Type } from 'class-transformer';
import { SubjectWhereUniqueInput } from './subject-where-unique.input';

@ArgsType()
export class UpdateOneSubjectArgs {

    @Field(() => SubjectUpdateInput, {nullable:false})
    @Type(() => SubjectUpdateInput)
    data!: SubjectUpdateInput;

    @Field(() => SubjectWhereUniqueInput, {nullable:false})
    @Type(() => SubjectWhereUniqueInput)
    where!: SubjectWhereUniqueInput;
}
