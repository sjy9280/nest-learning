import * as Joi from 'joi';
import { Module } from '@nestjs/common';
import { ConfigModule as Config } from '@nestjs/config';
import * as dotenv from 'dotenv';

const schema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production')
    .default('development'),
  DB_PORT: Joi.number().default(3000),
  DB_HOST: Joi.string().ip(),
});

const envFilePath = [`.env.${process.env.NODE_ENV || 'development'}`, '.env'];

@Module({
  imports: [
    Config.forRoot({
      isGlobal: true,
      envFilePath: envFilePath,
      load: [() => dotenv.config({ path: '.env' })],
      validationSchema: schema,
    }),
  ],
})
export class ConfigModule {}
