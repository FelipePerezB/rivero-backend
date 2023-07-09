import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocWhereUniqueInput } from './doc-where-unique.input';
import { Type } from 'class-transformer';
import { DocCreateWithoutSubjectInput } from './doc-create-without-subject.input';

@InputType()
export class DocCreateOrConnectWithoutSubjectInput {

    @Field(() => DocWhereUniqueInput, {nullable:false})
    @Type(() => DocWhereUniqueInput)
    where!: DocWhereUniqueInput;

    @Field(() => DocCreateWithoutSubjectInput, {nullable:false})
    @Type(() => DocCreateWithoutSubjectInput)
    create!: DocCreateWithoutSubjectInput;
}
