import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SubjectsService } from './subjects.service';
import { Subject } from '../generated/subject/subject.model';
import { SubjectCreateInput } from '../generated/subject/subject-create.input';
import { SubjectUpdateInput } from '../generated/subject/subject-update.input';
import { Prisma } from '@prisma/client';

@Resolver(() => Subject)
export class SubjectsResolver {
  constructor(private readonly subjectService: SubjectsService) {}

  @Mutation(() => Subject)
  createSubject(
    @Args('createSubjectInput') createSubjectInput: SubjectCreateInput,
  ) {
    return this.subjectService.create(
      createSubjectInput as Prisma.SubjectCreateInput,
    );
  }

  @Query(() => [Subject], { name: 'subjects' })
  findAll() {
    return this.subjectService.findAll({});
  }

  @Query(() => Subject, { name: 'subject' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.subjectService.findOne({ id });
  }

  @Mutation(() => Subject)
  updateSubject(
    @Args('id') id: number,
    @Args('updateSubjectInput') updateSubjectInput: SubjectUpdateInput,
  ) {
    return this.subjectService.update({
      where: { id },
      data: updateSubjectInput as unknown as Prisma.SubjectUpdateInput,
    });
  }

  @Mutation(() => Subject)
  removeSubject(@Args('id', { type: () => Int }) id: number) {
    return this.subjectService.remove({ id });
  }
}
