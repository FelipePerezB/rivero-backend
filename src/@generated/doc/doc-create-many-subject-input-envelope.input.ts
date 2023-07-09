import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocCreateManySubjectInput } from './doc-create-many-subject.input';
import { Type } from 'class-transformer';

@InputType()
export class DocCreateManySubjectInputEnvelope {

    @Field(() => [DocCreateManySubjectInput], {nullable:false})
    @Type(() => DocCreateManySubjectInput)
    data!: Array<DocCreateManySubjectInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
