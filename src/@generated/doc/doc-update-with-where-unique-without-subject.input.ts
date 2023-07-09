import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocWhereUniqueInput } from './doc-where-unique.input';
import { Type } from 'class-transformer';
import { DocUpdateWithoutSubjectInput } from './doc-update-without-subject.input';

@InputType()
export class DocUpdateWithWhereUniqueWithoutSubjectInput {

    @Field(() => DocWhereUniqueInput, {nullable:false})
    @Type(() => DocWhereUniqueInput)
    where!: DocWhereUniqueInput;

    @Field(() => DocUpdateWithoutSubjectInput, {nullable:false})
    @Type(() => DocUpdateWithoutSubjectInput)
    data!: DocUpdateWithoutSubjectInput;
}
