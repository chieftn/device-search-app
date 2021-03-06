import { ERROR_TYPES } from '../../constants';

export class HttpError extends Error {
    public httpCode: number;
    public httpMessage: string;

    constructor(httpCode: number, httpMessage?: string) {
        super(ERROR_TYPES.HTTP);
        this.name = this.message;
        this.httpCode = httpCode;
        this.httpMessage = httpMessage ? httpMessage : '';
    }
}
