import * as fs from 'fs';
import * as path from 'path';

const STORAGE_PATH = path.resolve('tests/storage/sessionUrl.json');

export function setSessionData(dynamicUrl: string): void {
  fs.writeFileSync(STORAGE_PATH, JSON.stringify({ baseUrl: dynamicUrl }, null, 2), 'utf-8');
}

export function getSessionData(): { baseUrl: string } {
  if (!fs.existsSync(STORAGE_PATH)) throw new Error('Session data not found.');
  return JSON.parse(fs.readFileSync(STORAGE_PATH, 'utf-8'));
}