import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocCreateManyTopicInput } from './doc-create-many-topic.input';
import { Type } from 'class-transformer';

@InputType()
export class DocCreateManyTopicInputEnvelope {

    @Field(() => [DocCreateManyTopicInput], {nullable:false})
    @Type(() => DocCreateManyTopicInput)
    data!: Array<DocCreateManyTopicInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
