import { StartupSnapshot } from "v8";

export class ApplicationError extends Error {
    status: number;


    constructor(message: string) {
        super(message);
        this.status = 500;
        this.name = 'ApplicationError';
    }
}