import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocWhereUniqueInput } from './doc-where-unique.input';
import { Type } from 'class-transformer';
import { DocUpdateWithoutSubtopicInput } from './doc-update-without-subtopic.input';
import { DocCreateWithoutSubtopicInput } from './doc-create-without-subtopic.input';

@InputType()
export class DocUpsertWithWhereUniqueWithoutSubtopicInput {

    @Field(() => DocWhereUniqueInput, {nullable:false})
    @Type(() => DocWhereUniqueInput)
    where!: DocWhereUniqueInput;

    @Field(() => DocUpdateWithoutSubtopicInput, {nullable:false})
    @Type(() => DocUpdateWithoutSubtopicInput)
    update!: DocUpdateWithoutSubtopicInput;

    @Field(() => DocCreateWithoutSubtopicInput, {nullable:false})
    @Type(() => DocCreateWithoutSubtopicInput)
    create!: DocCreateWithoutSubtopicInput;
}
