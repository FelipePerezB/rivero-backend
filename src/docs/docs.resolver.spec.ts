import { Test, TestingModule } from '@nestjs/testing';
import { DocsResolver } from './docs.resolver';
import { DocsService } from './docs.service';

describe('DocsResolver', () => {
  let resolver: DocsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DocsResolver, DocsService],
    }).compile();

    resolver = module.get<DocsResolver>(DocsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
