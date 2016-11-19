export class Result<T> {
    status: string;
    data: T;
    errors: ErrorCode[];
    success: boolean;
}

export class ErrorCode {
    code: string;
    description: string;
}