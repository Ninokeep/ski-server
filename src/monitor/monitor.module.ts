import { MonitorEntity } from './entity/monitor.entity';
import { Module } from '@nestjs/common';
import { MonitorService } from './service/monitor.service';
import { ControllerController } from './controller/controller.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([MonitorEntity])],
    providers: [MonitorService],
    controllers: [ControllerController]
})
export class MonitorModule { }
