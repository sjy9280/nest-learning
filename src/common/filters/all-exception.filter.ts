import { ArgumentsHost, Catch, ExceptionFilter, Logger } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

@Catch()
export class AllExceptionFilter<T> implements ExceptionFilter {
  private readonly logger = new Logger();

  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: T, host: ArgumentsHost): void {}
}
