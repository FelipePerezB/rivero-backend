import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SchoolsService } from './schools.service';
import { School } from '../@generated/school/school.model';
import { SchoolCreateInput } from '../@generated/school/school-create.input';
import { SchoolUpdateInput } from '../@generated/school/school-update.input';
import { Prisma } from '@prisma/client';
// import { Prisma } from '@prisma/client';

@Resolver(() => School)
export class SchoolsResolver {
  constructor(private readonly schoolService: SchoolsService) {}

  @Mutation(() => School)
  createSchool(
    @Args('createSchoolInput') createSchoolInput: SchoolCreateInput,
  ) {
    return this.schoolService.create(
      createSchoolInput as Prisma.SchoolCreateInput,
    );
  }

  @Query(() => [School], { name: 'schools' })
  findAll() {
    return this.schoolService.findAll({});
  }

  @Query(() => School, { name: 'school' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.schoolService.findOne({ id });
  }

  @Mutation(() => School)
  updateSchool(
    @Args('id') id: number,
    @Args('updateSchoolInput') updateSchoolInput: SchoolUpdateInput,
  ) {
    return this.schoolService.update({
      where: { id },
      data: updateSchoolInput as Prisma.SchoolUpdateInput,
    });
  }

  @Mutation(() => School)
  removeSchool(@Args('id', { type: () => Int }) id: number) {
    return this.schoolService.remove({ id });
  }
}
