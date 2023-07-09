import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocWhereUniqueInput } from './doc-where-unique.input';
import { Type } from 'class-transformer';
import { DocUpdateWithoutSubjectInput } from './doc-update-without-subject.input';
import { DocCreateWithoutSubjectInput } from './doc-create-without-subject.input';

@InputType()
export class DocUpsertWithWhereUniqueWithoutSubjectInput {

    @Field(() => DocWhereUniqueInput, {nullable:false})
    @Type(() => DocWhereUniqueInput)
    where!: DocWhereUniqueInput;

    @Field(() => DocUpdateWithoutSubjectInput, {nullable:false})
    @Type(() => DocUpdateWithoutSubjectInput)
    update!: DocUpdateWithoutSubjectInput;

    @Field(() => DocCreateWithoutSubjectInput, {nullable:false})
    @Type(() => DocCreateWithoutSubjectInput)
    create!: DocCreateWithoutSubjectInput;
}
