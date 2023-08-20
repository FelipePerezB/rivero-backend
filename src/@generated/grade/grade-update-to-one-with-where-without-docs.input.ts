import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradeWhereInput } from './grade-where.input';
import { Type } from 'class-transformer';
import { GradeUpdateWithoutDocsInput } from './grade-update-without-docs.input';

@InputType()
export class GradeUpdateToOneWithWhereWithoutDocsInput {

    @Field(() => GradeWhereInput, {nullable:true})
    @Type(() => GradeWhereInput)
    where?: GradeWhereInput;

    @Field(() => GradeUpdateWithoutDocsInput, {nullable:false})
    @Type(() => GradeUpdateWithoutDocsInput)
    data!: GradeUpdateWithoutDocsInput;
}
