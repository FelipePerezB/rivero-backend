import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';
import { SubjectsOnSchoolsListRelationFilter } from '../subjects-on-schools/subjects-on-schools-list-relation-filter.input';
import { GradesOnSchoolsListRelationFilter } from '../grades-on-schools/grades-on-schools-list-relation-filter.input';

@InputType()
export class SchoolWhereInput {

    @Field(() => [SchoolWhereInput], {nullable:true})
    AND?: Array<SchoolWhereInput>;

    @Field(() => [SchoolWhereInput], {nullable:true})
    OR?: Array<SchoolWhereInput>;

    @Field(() => [SchoolWhereInput], {nullable:true})
    NOT?: Array<SchoolWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    createdAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updateAt?: DateTimeNullableFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    users?: UserListRelationFilter;

    @Field(() => SubjectsOnSchoolsListRelationFilter, {nullable:true})
    subjects?: SubjectsOnSchoolsListRelationFilter;

    @Field(() => GradesOnSchoolsListRelationFilter, {nullable:true})
    grades?: GradesOnSchoolsListRelationFilter;
}
