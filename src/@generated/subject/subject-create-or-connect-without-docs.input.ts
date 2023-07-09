import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectWhereUniqueInput } from './subject-where-unique.input';
import { Type } from 'class-transformer';
import { SubjectCreateWithoutDocsInput } from './subject-create-without-docs.input';

@InputType()
export class SubjectCreateOrConnectWithoutDocsInput {

    @Field(() => SubjectWhereUniqueInput, {nullable:false})
    @Type(() => SubjectWhereUniqueInput)
    where!: SubjectWhereUniqueInput;

    @Field(() => SubjectCreateWithoutDocsInput, {nullable:false})
    @Type(() => SubjectCreateWithoutDocsInput)
    create!: SubjectCreateWithoutDocsInput;
}
