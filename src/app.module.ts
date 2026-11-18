import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { ProductsModule } from './products/products.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    ProductsModule,
  ],
})
export class AppModule {}
