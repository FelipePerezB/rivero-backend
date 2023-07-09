import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradeWhereUniqueInput } from './grade-where-unique.input';
import { Type } from 'class-transformer';
import { GradeCreateWithoutDocsInput } from './grade-create-without-docs.input';

@InputType()
export class GradeCreateOrConnectWithoutDocsInput {

    @Field(() => GradeWhereUniqueInput, {nullable:false})
    @Type(() => GradeWhereUniqueInput)
    where!: GradeWhereUniqueInput;

    @Field(() => GradeCreateWithoutDocsInput, {nullable:false})
    @Type(() => GradeCreateWithoutDocsInput)
    create!: GradeCreateWithoutDocsInput;
}
