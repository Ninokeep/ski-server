import { MonitorEntity } from './entity/monitor.entity';
import { Module } from '@nestjs/common';
import { MonitorService } from './service/monitor.service';
import { MonitorController } from './controller/monitor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([MonitorEntity])],
    providers: [MonitorService],
    controllers: [MonitorController]
})
export class MonitorModule { }
