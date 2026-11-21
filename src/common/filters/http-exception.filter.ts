import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';

@Catch()
export class HttpExceptionFilter<T> implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();

    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const statusCode = exception.getStatus();
    const exceptionResponse = exception.getResponse();

    const message = typeof exceptionResponse === 'string' ? exceptionResponse : (exceptionResponse as { message?: string }).message ?? exception.message;

    response.status(statusCode).json({
      success: false,
      status: statusCode,
      message,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
