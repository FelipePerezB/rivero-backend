import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubjectCreateManyInput } from './subject-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManySubjectArgs {

    @Field(() => [SubjectCreateManyInput], {nullable:false})
    @Type(() => SubjectCreateManyInput)
    data!: Array<SubjectCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
