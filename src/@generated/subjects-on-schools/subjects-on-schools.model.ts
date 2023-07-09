import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Subject } from '../subject/subject.model';
import { School } from '../school/school.model';

@ObjectType()
export class SubjectsOnSchools {

    @Field(() => Int, {nullable:false})
    subjectId!: number;

    @Field(() => Int, {nullable:false})
    schoolId!: number;

    @Field(() => Date, {nullable:true})
    createdAt!: Date | null;

    @Field(() => Date, {nullable:true})
    updateAt!: Date | null;

    @Field(() => Subject, {nullable:true})
    Subject?: Subject | null;

    @Field(() => School, {nullable:true})
    School?: School | null;
}
