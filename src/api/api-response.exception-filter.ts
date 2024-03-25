import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Response } from 'express';
import { ApiResponse } from './api-response.interface';

@Catch(HttpException)
export class ApiResponseExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();

        const status = exception.getStatus();
        const message = exception.message || 'Internal server error';

        const format: ApiResponse = {
            statusCode: status,
            message,
        };
        response.status(status).json(format);
    }
}
