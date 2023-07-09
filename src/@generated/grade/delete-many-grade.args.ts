import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GradeWhereInput } from './grade-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyGradeArgs {

    @Field(() => GradeWhereInput, {nullable:true})
    @Type(() => GradeWhereInput)
    where?: GradeWhereInput;
}
