import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocWhereUniqueInput } from './doc-where-unique.input';
import { Type } from 'class-transformer';
import { DocUpdateWithoutTopicInput } from './doc-update-without-topic.input';

@InputType()
export class DocUpdateWithWhereUniqueWithoutTopicInput {

    @Field(() => DocWhereUniqueInput, {nullable:false})
    @Type(() => DocWhereUniqueInput)
    where!: DocWhereUniqueInput;

    @Field(() => DocUpdateWithoutTopicInput, {nullable:false})
    @Type(() => DocUpdateWithoutTopicInput)
    data!: DocUpdateWithoutTopicInput;
}
