import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class NoteScalarWhereInput {

    @Field(() => [NoteScalarWhereInput], {nullable:true})
    AND?: Array<NoteScalarWhereInput>;

    @Field(() => [NoteScalarWhereInput], {nullable:true})
    OR?: Array<NoteScalarWhereInput>;

    @Field(() => [NoteScalarWhereInput], {nullable:true})
    NOT?: Array<NoteScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    subjectId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    topicId?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    subtopicId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    fileId?: IntFilter;
}
