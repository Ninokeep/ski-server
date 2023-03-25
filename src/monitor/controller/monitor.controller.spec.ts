import { Test, TestingModule } from '@nestjs/testing';
import { MonitorController } from './monitor.controller';
import { MonitorService } from '../service/monitor.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { MonitorEntity } from '../entity/monitor.entity';

describe('MonitorController', () => {
  let controller: MonitorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MonitorService,
        {
          provide: getRepositoryToken(MonitorEntity),
          useValue: {
            create: jest.fn().mockImplementation((dto) => dto),
            save: jest.fn(),
            findOne: jest.fn().mockImplementation((element) => element.where.name)
          }
        }
      ],
      controllers: [MonitorController],
    }).compile();

    controller = module.get<MonitorController>(MonitorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
