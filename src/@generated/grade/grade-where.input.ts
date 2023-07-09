import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';
import { GradesOnDocsListRelationFilter } from '../grades-on-docs/grades-on-docs-list-relation-filter.input';
import { GradesOnSchoolsListRelationFilter } from '../grades-on-schools/grades-on-schools-list-relation-filter.input';

@InputType()
export class GradeWhereInput {

    @Field(() => [GradeWhereInput], {nullable:true})
    AND?: Array<GradeWhereInput>;

    @Field(() => [GradeWhereInput], {nullable:true})
    OR?: Array<GradeWhereInput>;

    @Field(() => [GradeWhereInput], {nullable:true})
    NOT?: Array<GradeWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    grade?: StringFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    createdAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updateAt?: DateTimeNullableFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    users?: UserListRelationFilter;

    @Field(() => GradesOnDocsListRelationFilter, {nullable:true})
    docs?: GradesOnDocsListRelationFilter;

    @Field(() => GradesOnSchoolsListRelationFilter, {nullable:true})
    schools?: GradesOnSchoolsListRelationFilter;
}
