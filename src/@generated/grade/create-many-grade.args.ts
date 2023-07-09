import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GradeCreateManyInput } from './grade-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyGradeArgs {

    @Field(() => [GradeCreateManyInput], {nullable:false})
    @Type(() => GradeCreateManyInput)
    data!: Array<GradeCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
