import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocWhereUniqueInput } from './doc-where-unique.input';
import { Type } from 'class-transformer';
import { DocCreateWithoutSubtopicInput } from './doc-create-without-subtopic.input';

@InputType()
export class DocCreateOrConnectWithoutSubtopicInput {

    @Field(() => DocWhereUniqueInput, {nullable:false})
    @Type(() => DocWhereUniqueInput)
    where!: DocWhereUniqueInput;

    @Field(() => DocCreateWithoutSubtopicInput, {nullable:false})
    @Type(() => DocCreateWithoutSubtopicInput)
    create!: DocCreateWithoutSubtopicInput;
}
