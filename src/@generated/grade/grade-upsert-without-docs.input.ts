import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradeUpdateWithoutDocsInput } from './grade-update-without-docs.input';
import { Type } from 'class-transformer';
import { GradeCreateWithoutDocsInput } from './grade-create-without-docs.input';
import { GradeWhereInput } from './grade-where.input';

@InputType()
export class GradeUpsertWithoutDocsInput {

    @Field(() => GradeUpdateWithoutDocsInput, {nullable:false})
    @Type(() => GradeUpdateWithoutDocsInput)
    update!: GradeUpdateWithoutDocsInput;

    @Field(() => GradeCreateWithoutDocsInput, {nullable:false})
    @Type(() => GradeCreateWithoutDocsInput)
    create!: GradeCreateWithoutDocsInput;

    @Field(() => GradeWhereInput, {nullable:true})
    @Type(() => GradeWhereInput)
    where?: GradeWhereInput;
}
