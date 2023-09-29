import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectCreateWithoutSubtopicInput } from './subject-create-without-subtopic.input';
import { Type } from 'class-transformer';
import { SubjectCreateOrConnectWithoutSubtopicInput } from './subject-create-or-connect-without-subtopic.input';
import { SubjectWhereUniqueInput } from './subject-where-unique.input';

@InputType()
export class SubjectCreateNestedOneWithoutSubtopicInput {

    @Field(() => SubjectCreateWithoutSubtopicInput, {nullable:true})
    @Type(() => SubjectCreateWithoutSubtopicInput)
    create?: SubjectCreateWithoutSubtopicInput;

    @Field(() => SubjectCreateOrConnectWithoutSubtopicInput, {nullable:true})
    @Type(() => SubjectCreateOrConnectWithoutSubtopicInput)
    connectOrCreate?: SubjectCreateOrConnectWithoutSubtopicInput;

    @Field(() => SubjectWhereUniqueInput, {nullable:true})
    @Type(() => SubjectWhereUniqueInput)
    connect?: SubjectWhereUniqueInput;
}
