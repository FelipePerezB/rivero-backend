import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradesOnDocsCreateManyDocInput } from './grades-on-docs-create-many-doc.input';
import { Type } from 'class-transformer';

@InputType()
export class GradesOnDocsCreateManyDocInputEnvelope {

    @Field(() => [GradesOnDocsCreateManyDocInput], {nullable:false})
    @Type(() => GradesOnDocsCreateManyDocInput)
    data!: Array<GradesOnDocsCreateManyDocInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
