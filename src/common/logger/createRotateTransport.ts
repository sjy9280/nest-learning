import * as DailyRotateFile from 'winston-daily-rotate-file';
import * as winston from 'winston';
import { Console } from 'winston/lib/winston/transports';
import { utilities } from 'nest-winston';
import { format } from 'winston';

export const consoleTransports = new Console({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.ms(),
    utilities.format.nestLike('Nest_Learning'),
  ),
});

export function createDailyRotateTransport(level: string, filename: string) {
  return new DailyRotateFile({
    level: level,
    dirname: 'logs',
    filename: `${filename}-%DATE%.log`,
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.simple(),
    ),
  });
}
