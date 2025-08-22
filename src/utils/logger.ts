/*import winston from 'winston';
import path from 'path';
import fs from 'fs';

export class Logger {
    private logger: winston.Logger;

    constructor(logFilePath = 'test-results/automation-log.log') {
        const dir = path.dirname(logFilePath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        this.logger = winston.createLogger({
            level: 'info',
            format: winston.format.combine(
                winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                winston.format.printf(({ level, message, timestamp }) => {
                    const callerFile = Logger.getActualCallerFileName();
                    return `[${timestamp}] ${level.toUpperCase()} (${callerFile}): ${message}`;
                })
            ),
            transports: [
                new winston.transports.Console(),
                new winston.transports.File({ filename: logFilePath }),
            ],
        });
    }

    private static getActualCallerFileName(): string {
        const originalPrepareStackTrace = Error.prepareStackTrace;

        try {
            const err = new Error();
            Error.prepareStackTrace = (_, stack) => stack;
            const stack = err.stack as unknown as NodeJS.CallSite[];

            // Skip frames: [0] is getActualCallerFileName, [1] is printf formatter,
            // [2] is winston internals, so [3] or [4]+ is likely the actual caller
            for (const frame of stack) {
                const fileName = frame.getFileName();
                if (
                    fileName &&
                    !fileName.includes('logger.ts') &&
                    !fileName.includes('node_modules')
                ) {
                    return path.basename(fileName);
                }
            }

            return 'unknown';
        } catch (err) {
            return 'unknown';
        } finally {
            Error.prepareStackTrace = originalPrepareStackTrace;
        }
    }

    info(message: string): void {
        this.logger.info(message);
    }

    debug(message: string): void {
        this.logger.debug(message);
    }

    warn(message: string): void {
        this.logger.warn(message);
    }

    error(message: string): void {
        this.logger.error(message);
    }
}

 */