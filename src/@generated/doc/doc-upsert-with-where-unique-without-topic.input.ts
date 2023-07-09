import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocWhereUniqueInput } from './doc-where-unique.input';
import { Type } from 'class-transformer';
import { DocUpdateWithoutTopicInput } from './doc-update-without-topic.input';
import { DocCreateWithoutTopicInput } from './doc-create-without-topic.input';

@InputType()
export class DocUpsertWithWhereUniqueWithoutTopicInput {

    @Field(() => DocWhereUniqueInput, {nullable:false})
    @Type(() => DocWhereUniqueInput)
    where!: DocWhereUniqueInput;

    @Field(() => DocUpdateWithoutTopicInput, {nullable:false})
    @Type(() => DocUpdateWithoutTopicInput)
    update!: DocUpdateWithoutTopicInput;

    @Field(() => DocCreateWithoutTopicInput, {nullable:false})
    @Type(() => DocCreateWithoutTopicInput)
    create!: DocCreateWithoutTopicInput;
}
