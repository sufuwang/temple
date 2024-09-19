import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskService } from './task.service';
import { ScheduleModule } from '@nestjs/schedule';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [ScheduleModule.forRoot(), HttpModule],
  controllers: [AppController],
  providers: [AppService, TaskService],
})
export class AppModule {}
