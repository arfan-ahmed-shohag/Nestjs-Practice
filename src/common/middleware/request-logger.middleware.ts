import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class RequestLoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const startTime = Date.now();
    const requestedIp = req.ip;

    console.log(`[REQUEST] ${req.method} ${req.originalUrl} - ${new Date().toISOString()} - ${requestedIp}`);

    res.on('finish', ()=>{
      const elapsedTime = Date.now() - startTime;

      console.log(`[RESPONSE] ${req.method} ${req.originalUrl} - ${res.statusCode} - ${elapsedTime}ms`);
    })
    next();
  }
}
