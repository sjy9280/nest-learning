import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './common/config/config.module';
import { LogsModule } from './common/logs/logs.module';

@Module({
  imports: [ConfigModule, LogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
