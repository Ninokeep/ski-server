import { UpdateMonitorDto } from './../dto/update-monitor.dto copy';
import { CreateMonitorDto } from './../dto/create-monitor.dto';
import { FindOneParamDto } from '../../common/dto/find-one-param.dto';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { GetMonitorDto } from '../dto/get-monitor.dto';
import { MonitorService } from '../service/monitor.service';
import { DeleteResult } from 'typeorm';

@Controller('monitors')
export class MonitorController {
    constructor(private monitorService: MonitorService) { }

    @Get(':id')
    findOne(@Param() { id }: FindOneParamDto): Promise<GetMonitorDto> {

        return this.monitorService.findOne(id);
    }

    @Post()
    create(@Body() request: CreateMonitorDto): Promise<CreateMonitorDto> {

        return this.monitorService.create(request);
    }

    @Get()
    findAll(): Promise<GetMonitorDto[]> {

        return this.monitorService.findAll();
    }

    @Delete(':id')
    delete(@Param() { id }: FindOneParamDto): Promise<DeleteResult> {

        return this.monitorService.delete(id);
    }

    @Put(':id')
    update(@Param() { id }: FindOneParamDto, @Body() body: UpdateMonitorDto): Promise<any> {

        return this.monitorService.update(id, body);
    }
}
