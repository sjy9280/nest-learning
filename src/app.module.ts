import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import * as dotenv from 'dotenv';
import * as Joi from 'joi';

const envFilePath = [`.env.${process.env.NODE_ENV || 'development'}`,'.env']

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: envFilePath,
    load: [() => dotenv.config({ path: '.env' })],
    validationSchema: Joi.object({
    })
  }), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
