import { Test, TestingModule } from '@nestjs/testing';
import { InstitutesResolver } from './institutes.resolver';
import { InstitutesService } from './institutes.service';

describe('InstitutesResolver', () => {
  let resolver: InstitutesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InstitutesResolver, InstitutesService],
    }).compile();

    resolver = module.get<InstitutesResolver>(InstitutesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
