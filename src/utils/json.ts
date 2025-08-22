
export class JsonTable {
  private readonly data: Record<string, any>[];
  private row: number;

  constructor(jsonData: Record<string, any>[]) {
    if (!Array.isArray(jsonData)) {
      throw new Error('JsonTable expects an array of objects.');
    }
    this.data = jsonData;
    this.row = 0;
  }

  /**
   * Get value from specific row index and column name
   **/
  getValue(columnName: string, rowNumber?: number, ): any {
    if(rowNumber)
    {
      this.row = rowNumber - 1;
    }
    const row = this.data[this.row];
    if (!row) {
      throw new Error(`Row at index ${rowNumber} does not exist.`);
    }
    if (!(columnName in row)) {
      throw new Error(`Column "${columnName}" not found in row ${rowNumber}.`);
    }
    return row[columnName];
  }

  /**
   * Set Row to be used
   */
  useRow(rowNumber?: number): void {
    if (rowNumber) {
      this.row = rowNumber - 1;
    }
  }
  /**
   * Get full row by index
   */
  getRow(rowNumber?: number): Record<string, any> {
    if(rowNumber)
    {
      this.row = rowNumber - 1;
    }
    const row = this.data[this.row];
    if (!row) {
      throw new Error(`Row at index ${rowNumber} does not exist.`);
    }
    return row;
  }

  /**
   * Find the first row that matches a column value
   */
  findRowByColumnValue(columnName: string, value: any): Record<string, any> | undefined {
    return this.data.find(row => row[columnName] === value);
  }

  /**
   * Get total number of rows
   */
  getRowCount(): number {
    return this.data.length;
  }
}