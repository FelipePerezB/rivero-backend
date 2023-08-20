import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SubtopicService } from './subtopics.service';
import { Subtopic } from '../@generated/subtopic/subtopic.model';
import { SubtopicCreateInput } from '../@generated/subtopic/subtopic-create.input';
import { SubtopicUpdateInput } from '../@generated/subtopic/subtopic-update.input';
import { Prisma } from '@prisma/client';
import { SubtopicWhereInput } from 'src/@generated/subtopic/subtopic-where.input';

@Resolver(() => Subtopic)
export class SubtopicsResolver {
  constructor(private readonly subtopicService: SubtopicService) {}

  @Mutation(() => Subtopic)
  createSubtopic(
    @Args('createSubtopicInput') createSubtopicInput: SubtopicCreateInput,
  ) {
    return this.subtopicService.create(
      createSubtopicInput as Prisma.SubtopicCreateInput,
    );
  }

  @Query(() => [Subtopic], { name: 'subtopics' })
  findAll(@Args('where') where: SubtopicWhereInput) {
    return this.subtopicService.findAll({ where });
  }

  @Query(() => Subtopic, { name: 'subtopic' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.subtopicService.findOne({ id });
  }

  @Mutation(() => Subtopic)
  updateSubtopic(
    @Args('id') id: number,
    @Args('updateSubtopicInput') updateSubtopicInput: SubtopicUpdateInput,
  ) {
    return this.subtopicService.update({
      where: { id },
      data: updateSubtopicInput as unknown as Prisma.SubtopicUpdateInput,
    });
  }

  @Mutation(() => Subtopic)
  removeSubtopic(@Args('id', { type: () => Int }) id: number) {
    return this.subtopicService.remove({ id });
  }
}
