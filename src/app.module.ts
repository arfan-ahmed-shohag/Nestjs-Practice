import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { ProductsModule } from './products/products.module.js';
import { ConfigModule } from '@nestjs/config';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    ProductsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      validate: (config) => {
        if (!config.PORT) {
          throw new Error('PORT is not defined in the environment variables');
        }

        if (!config.DATABASE_URL) {
          throw new Error('DATABASE_URL is not defined in the environment variables');
        }

        if (!config.JWT_SECRET) {
          throw new Error('JWT_SECRET is not defined in the environment variables');
        }

        return config;
      }
    })
  ],
})
export class AppModule { }
