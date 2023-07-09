import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocWhereUniqueInput } from './doc-where-unique.input';
import { Type } from 'class-transformer';
import { DocCreateWithoutTopicInput } from './doc-create-without-topic.input';

@InputType()
export class DocCreateOrConnectWithoutTopicInput {

    @Field(() => DocWhereUniqueInput, {nullable:false})
    @Type(() => DocWhereUniqueInput)
    where!: DocWhereUniqueInput;

    @Field(() => DocCreateWithoutTopicInput, {nullable:false})
    @Type(() => DocCreateWithoutTopicInput)
    create!: DocCreateWithoutTopicInput;
}
