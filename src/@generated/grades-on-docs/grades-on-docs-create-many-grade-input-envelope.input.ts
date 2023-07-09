import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradesOnDocsCreateManyGradeInput } from './grades-on-docs-create-many-grade.input';
import { Type } from 'class-transformer';

@InputType()
export class GradesOnDocsCreateManyGradeInputEnvelope {

    @Field(() => [GradesOnDocsCreateManyGradeInput], {nullable:false})
    @Type(() => GradesOnDocsCreateManyGradeInput)
    data!: Array<GradesOnDocsCreateManyGradeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
