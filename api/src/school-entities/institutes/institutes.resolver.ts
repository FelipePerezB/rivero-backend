import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { InstitutesService } from './institutes.service';
import { Institute } from './entities/institute.entity';
import { CreateInstituteInput } from './dto/create-institute.input';
import { UpdateInstituteInput } from './dto/update-institute.input';

@Resolver(() => Institute)
export class InstitutesResolver {
  constructor(private readonly institutesService: InstitutesService) {}

  @Mutation(() => Institute)
  createInstitute(@Args('createInstituteInput') createInstituteInput: CreateInstituteInput) {
    return this.institutesService.create(createInstituteInput);
  }

  @Query(() => [Institute], { name: 'institutes' })
  findAll() {
    return this.institutesService.findAll();
  }

  @Query(() => Institute, { name: 'institute' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.institutesService.findOne(id);
  }

  @Mutation(() => Institute)
  updateInstitute(@Args('updateInstituteInput') updateInstituteInput: UpdateInstituteInput) {
    return this.institutesService.update(updateInstituteInput.id, updateInstituteInput);
  }

  @Mutation(() => Institute)
  removeInstitute(@Args('id', { type: () => Int }) id: number) {
    return this.institutesService.remove(id);
  }
}
