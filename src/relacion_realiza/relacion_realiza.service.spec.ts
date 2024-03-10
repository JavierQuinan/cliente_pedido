import { Test, TestingModule } from '@nestjs/testing';
import { RelacionRealizaService } from './relacion_realiza.service';

describe('RelacionRealizaService', () => {
  let service: RelacionRealizaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RelacionRealizaService],
    }).compile();

    service = module.get<RelacionRealizaService>(RelacionRealizaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
