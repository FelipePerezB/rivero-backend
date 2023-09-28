import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrganizationsService } from './organization.service';
import { Organization } from '../@generated/organization/organization.model';
import { OrganizationCreateInput } from '../@generated/organization/organization-create.input';
import { OrganizationUpdateInput } from '../@generated/organization/organization-update.input';
import { Prisma } from '@prisma/client';
// import { Prisma } from '@prisma/client';

@Resolver(() => Organization)
export class OrganizationsResolver {
  constructor(private readonly organizationService: OrganizationsService) {}

  @Mutation(() => Organization)
  createOrganization(
    @Args('createOrganizationInput')
    createOrganizationInput: OrganizationCreateInput,
  ) {
    return this.organizationService.create(
      createOrganizationInput as unknown as Prisma.OrganizationCreateInput,
    );
  }

  @Query(() => [Organization], { name: 'organizations' })
  findAll() {
    return this.organizationService.findAll({});
  }

  @Query(() => Organization, { name: 'organization' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.organizationService.findOne({ id });
  }

  @Mutation(() => Organization)
  updateOrganization(
    @Args('id') id: number,
    @Args('updateOrganizationInput')
    updateOrganizationInput: OrganizationUpdateInput,
  ) {
    return this.organizationService.update({
      where: { id },
      data: updateOrganizationInput as unknown as Prisma.OrganizationUpdateInput,
    });
  }

  @Mutation(() => Organization)
  removeOrganization(@Args('id', { type: () => Int }) id: number) {
    return this.organizationService.remove({ id });
  }
}
