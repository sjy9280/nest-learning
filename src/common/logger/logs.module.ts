import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { ConfigService } from '@nestjs/config';
import {
  consoleTransports,
  createDailyRotateTransport,
} from './createRotateTransport';

@Module({
  imports: [
    WinstonModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const logOn = configService.get('LOG_ON') === 'true';
        return {
          transports: [
            consoleTransports,
            ...(logOn
              ? [
                  createDailyRotateTransport('info', 'application'),
                  createDailyRotateTransport('warn', 'application'),
                ]
              : []),
          ],
        };
      },
    }),
  ],
})
export class LogsModule {}
