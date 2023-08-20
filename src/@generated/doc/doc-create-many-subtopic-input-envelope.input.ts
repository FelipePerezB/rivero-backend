import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocCreateManySubtopicInput } from './doc-create-many-subtopic.input';
import { Type } from 'class-transformer';

@InputType()
export class DocCreateManySubtopicInputEnvelope {

    @Field(() => [DocCreateManySubtopicInput], {nullable:false})
    @Type(() => DocCreateManySubtopicInput)
    data!: Array<DocCreateManySubtopicInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
