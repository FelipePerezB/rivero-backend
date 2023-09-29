import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectWhereInput } from './subject-where.input';
import { Type } from 'class-transformer';
import { SubjectUpdateWithoutSubtopicInput } from './subject-update-without-subtopic.input';

@InputType()
export class SubjectUpdateToOneWithWhereWithoutSubtopicInput {

    @Field(() => SubjectWhereInput, {nullable:true})
    @Type(() => SubjectWhereInput)
    where?: SubjectWhereInput;

    @Field(() => SubjectUpdateWithoutSubtopicInput, {nullable:false})
    @Type(() => SubjectUpdateWithoutSubtopicInput)
    data!: SubjectUpdateWithoutSubtopicInput;
}
