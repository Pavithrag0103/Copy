import * as fs from 'fs';

export function getSessionData(): { baseUrl: string } {
  return JSON.parse(fs.readFileSync('tests/storage/sessionUrl.json', 'utf-8'));
}