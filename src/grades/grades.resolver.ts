import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GradesService } from './grades.service';
import { Grade } from '../@generated/grade/grade.model';
import { GradeCreateInput } from '../@generated/grade/grade-create.input';
import { GradeUpdateInput } from '../@generated/grade/grade-update.input';
import { Prisma } from '@prisma/client';
import { GradeWhereInput } from 'src/@generated/grade/grade-where.input';

@Resolver(() => Grade)
export class GradesResolver {
  constructor(private readonly gradeService: GradesService) {}

  @Mutation(() => Grade)
  createGrade(@Args('createGradeInput') createGradeInput: GradeCreateInput) {
    return this.gradeService.create(
      createGradeInput as Prisma.GradeCreateInput,
    );
  }

  @Query(() => [Grade], { name: 'grades' })
  findAll(@Args('where', { nullable: true }) where?: GradeWhereInput) {
    return this.gradeService.findAll({ where });
  }

  @Query(() => Grade, { name: 'grade' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.gradeService.findOne({ id });
  }

  @Mutation(() => Grade)
  updateGrade(
    @Args('id') id: number,
    @Args('updateGradeInput') updateGradeInput: GradeUpdateInput,
  ) {
    return this.gradeService.update({
      where: { id },
      data: updateGradeInput as unknown as Prisma.GradeUpdateInput,
    });
  }

  @Mutation(() => Grade)
  removeGrade(@Args('id', { type: () => Int }) id: number) {
    return this.gradeService.remove({ id });
  }
}
