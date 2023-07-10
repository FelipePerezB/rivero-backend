import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocCreateManyAuthorInput } from './doc-create-many-author.input';
import { Type } from 'class-transformer';

@InputType()
export class DocCreateManyAuthorInputEnvelope {

    @Field(() => [DocCreateManyAuthorInput], {nullable:false})
    @Type(() => DocCreateManyAuthorInput)
    data!: Array<DocCreateManyAuthorInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
