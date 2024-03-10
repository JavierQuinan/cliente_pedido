import { Test, TestingModule } from '@nestjs/testing';
import { RelacionRealizaController } from './relacion_realiza.controller';

describe('RelacionRealizaController', () => {
  let controller: RelacionRealizaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RelacionRealizaController],
    }).compile();

    controller = module.get<RelacionRealizaController>(RelacionRealizaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
