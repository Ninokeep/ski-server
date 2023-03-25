import { UpdateMonitorDto } from './../dto/update-monitor.dto copy';
import { GetMonitorDto } from './../dto/get-monitor.dto';
import { CreateMonitorDto } from './../dto/create-monitor.dto';
import { MonitorEntity } from './../entity/monitor.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { FindOneParamDto } from '../../common/dto/find-one-param.dto';

@Injectable()
export class MonitorService {


    constructor(@InjectRepository(MonitorEntity) private monitorRepository: Repository<MonitorEntity>) { }


    async create(monitor: CreateMonitorDto): Promise<CreateMonitorDto> {

        const request = this.monitorRepository.create(monitor);
        await this.monitorRepository.save(request);

        return monitor;
    }

    async findOne<FindOneParamDto extends number>(id: FindOneParamDto): Promise<GetMonitorDto> {

        return await this.monitorRepository.findOne({
            where: {
                id
            }
        })
    }

    async findAll(): Promise<GetMonitorDto[]> {

        return await this.monitorRepository.find();
    }

    async delete<FindOneParamDto extends number>(id: FindOneParamDto): Promise<DeleteResult> {

        return await this.monitorRepository.delete(id);

    }

    async update<FindOneParamDto extends number>(id: FindOneParamDto, monitor: UpdateMonitorDto): Promise<UpdateResult> {

        return await this.monitorRepository.update(id, monitor);
    }

}
