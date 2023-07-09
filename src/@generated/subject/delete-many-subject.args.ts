import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubjectWhereInput } from './subject-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManySubjectArgs {

    @Field(() => SubjectWhereInput, {nullable:true})
    @Type(() => SubjectWhereInput)
    where?: SubjectWhereInput;
}
