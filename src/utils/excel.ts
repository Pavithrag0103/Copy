import * as XLSX from 'xlsx';

/**
 * Reads an Excel file and returns a collection of objects with keys from column headers.
 * @param filePath Path to the Excel file
 * @param sheetName (Optional) Sheet name to read, defaults to the first sheet
 * @returns Array of objects with column-value pairs
 */
export class ExcelUtils {
  async readExcelToCollection(filePath: string, sheetName?: string): Promise<Record<string, any>[]> {
    // Read the Excel file
    const workbook = XLSX.readFile(filePath);
    // Use first sheet if no name provided
    const targetSheetName = sheetName || workbook.SheetNames[0];
    const worksheet = workbook.Sheets[targetSheetName];
    if (!worksheet) {
      throw new Error(`Sheet "${targetSheetName}" not found.`);
    }
    // Convert to JSON, automatically uses first row as keys
    return XLSX.utils.sheet_to_json(worksheet);
  }
}