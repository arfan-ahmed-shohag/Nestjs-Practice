import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProductsController } from './products.controller.js';
import { ProductsService } from './products.service.js';
import { RequestLoggerMiddleware } from '../common/request-logger.middleware.js';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestLoggerMiddleware).forRoutes(ProductsController);
  }
}
