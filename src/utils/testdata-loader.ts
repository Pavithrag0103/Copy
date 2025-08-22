import * as fs from 'fs';
import * as path from 'path';

export function LoadTestData(fileName: string, key: string): any {
    const filePath = path.resolve(__dirname, '../data', fileName);
    const rawData = fs.readFileSync(filePath, 'utf-8');
    const jsonData = JSON.parse(rawData);

    if (!jsonData[key]) {
        throw new Error(`Key "${key}" not found in ${fileName}`);
    }

    return jsonData[key];
}
