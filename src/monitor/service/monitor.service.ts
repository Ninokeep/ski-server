import { CreateMonitorDto } from './../dto/create-monitor.dto';
import { MonitorEntity } from './../entity/monitor.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MonitorService {


    constructor(@InjectRepository(MonitorEntity) private monitorRepository: Repository<MonitorEntity>) { }


}
