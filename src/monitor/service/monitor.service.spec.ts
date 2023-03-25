import { Repository } from 'typeorm';
import { MonitorEntity } from './../entity/monitor.entity';
import { Test, TestingModule } from '@nestjs/testing';
import { MonitorService } from './monitor.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateMonitorDto } from '../dto/create-monitor.dto';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

describe('MonitorService', () => {
  let service: MonitorService;
  let monitorRepository: Repository<MonitorEntity>;

  const mockMonitorRepository = {
    create: jest.fn().mockImplementation((dto) => dto),
    save: jest.fn(),
    findOne: jest.fn().mockImplementation((element) => element.where.name)
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MonitorService,
        {
          provide: getRepositoryToken(MonitorEntity),
          useValue: mockMonitorRepository
        }
      ],
    }).compile();

    service = module.get<MonitorService>(MonitorService);
    monitorRepository = module.get<Repository<MonitorEntity>>(getRepositoryToken(MonitorEntity))
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {

    it('should create a monitor', async () => {
      const createMonitorDto: CreateMonitorDto = {
        name: 'Test monitor',
        lastname: 'Test monitor description',
        email: 'ezaeazeae',
        age: 1,
        password: 'lol'
      };
      const result: CreateMonitorDto = await service.create(
        createMonitorDto,
      );

      expect(result).toEqual(createMonitorDto);
      expect(mockMonitorRepository.create).toHaveBeenCalledWith(createMonitorDto);
      expect(mockMonitorRepository.save).toHaveBeenCalledWith(createMonitorDto);

    });

    it('check validation DTO monitor', async () => {
      const monitor = {
        name: 'toto',
        email: 'lol@ail.com',
        lastname: 'jean',
        age: 100,
        password: 'tutut'
      };
      const importOfDto = plainToInstance(CreateMonitorDto, monitor);

      const errors = await validate(importOfDto);

      expect(errors.length).toEqual(0)

    })
  });

});
