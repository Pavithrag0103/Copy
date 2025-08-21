export class StringUtil{
  yyyymmddhhmmss(date = new Date()): string
  {
    const pad = (n: number) => String(n).padStart(2, "0");
    const yyyy = date.getFullYear();
    const mm   = pad(date.getMonth() + 1); // month
    const dd   = pad(date.getDate());
    const hh   = pad(date.getHours());
    const mi   = pad(date.getMinutes());
    const ss   = pad(date.getSeconds());
    return `${yyyy}${mm}${dd}${hh}${mi}${ss}`;
  }
}

export const stringUtil = new StringUtil();