import { Injectable } from '@nestjs/common';
import { ApiResponse } from './api-response.interface';

@Injectable()
export class ApiResponseService {
    success(message: string, data?: any): ApiResponse {
        return {
            statusCode: 200,
            message: message ? message : 'Success',
            data,
        };
    }

    fail(message: string, data?: any): ApiResponse {
        return {
            statusCode: 400,
            message: message ? message : 'Success',
            data,
        };
    }
}