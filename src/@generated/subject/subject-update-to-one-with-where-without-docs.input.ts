import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectWhereInput } from './subject-where.input';
import { Type } from 'class-transformer';
import { SubjectUpdateWithoutDocsInput } from './subject-update-without-docs.input';

@InputType()
export class SubjectUpdateToOneWithWhereWithoutDocsInput {

    @Field(() => SubjectWhereInput, {nullable:true})
    @Type(() => SubjectWhereInput)
    where?: SubjectWhereInput;

    @Field(() => SubjectUpdateWithoutDocsInput, {nullable:false})
    @Type(() => SubjectUpdateWithoutDocsInput)
    data!: SubjectUpdateWithoutDocsInput;
}
