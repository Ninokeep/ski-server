import { UpdateMonitorDto } from './../dto/update-monitor.dto copy';
import { CreateMonitorDto } from './../dto/create-monitor.dto';
import { FindOneParamDto } from '../../common/dto/find-one-param.dto';
import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { GetMonitorDto } from '../dto/get-monitor.dto';
import { MonitorService } from '../service/monitor.service';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('monitors')
export class MonitorController {
    constructor(private monitorService: MonitorService) { }

    @Get(':id')
    async findOne(@Param() { id }: FindOneParamDto): Promise<GetMonitorDto> {

        return this.monitorService.findOne(id);
    }

    @Post()
    async create(@Body() request: CreateMonitorDto): Promise<CreateMonitorDto> {

        return this.monitorService.create(request);
    }

    @Get()
    async findAll(): Promise<GetMonitorDto[]> {

        return this.monitorService.findAll();
    }

    @Delete(':id')
    async delete(@Param() { id }: FindOneParamDto): Promise<DeleteResult> {

        try {
            return this.monitorService.delete(id);
        }
        catch (error) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: 'Unable to access database'
            },
                HttpStatus.INTERNAL_SERVER_ERROR, {
                cause: error
            })
        }
    }

    @Put(':id')
    async update(@Param() { id }: FindOneParamDto, @Body() body: UpdateMonitorDto): Promise<UpdateResult> {

        try {
            return this.monitorService.update(id, body).catch(error => {
                throw new HttpException({
                    status: HttpStatus.BAD_REQUEST,
                    error: 'email already exists',
                }, HttpStatus.BAD_REQUEST, {
                    cause: error
                });
            })
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: 'Unable to access database'
            },
                HttpStatus.INTERNAL_SERVER_ERROR, {
                cause: error
            })
        }
    }
}
