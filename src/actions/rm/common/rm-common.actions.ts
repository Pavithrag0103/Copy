import { expect, Locator, test } from '@playwright/test';
import { RmCommonComponent} from 'src/components/rm/common/rm-common.component';
import {PlaywrightExtension} from '../../../utils/playwright-extension'

export class RmCommonActions extends RmCommonComponent {

  private playwrightExtension = new PlaywrightExtension();

  protected async openMenuIfClosed(linkLocator: Locator, btnOpenMenu?: Locator):Promise<void> {
    if(btnOpenMenu) {
      if (!(await linkLocator.isVisible())) {
        await btnOpenMenu.click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForLoadState('load');
      }
    }
  }

  async goToLinkValidateTitleIndex(linkLocator: Locator, pageTitle: string, intPlace: number = 0, btnOpenMenu?: Locator): Promise<void> {
    await this.openMenuIfClosed(linkLocator, btnOpenMenu);
    await expect(linkLocator).toBeVisible();
    await linkLocator.click();
    await this.page.waitForLoadState('networkidle');
    console.log(await this.breadcrumbLabel.nth(intPlace).innerText());
    await expect(this.breadcrumbLabel.nth(intPlace)).toContainText(pageTitle);
  }

  async goToLinkValidateTitle(linkLocator: Locator, pageTitle: string, btnOpenMenu?: Locator): Promise<void> {
    await this.openMenuIfClosed(linkLocator, btnOpenMenu);
    await expect(linkLocator).toBeVisible();
    await linkLocator.click();
    await this.page.waitForLoadState('networkidle');
    //console.log(await this.breadcrumbLabel.nth(intPlace).innerText());
    await expect(this.breadcrumbLabel.filter({ hasText: `${pageTitle}` })).toBeVisible();
  }

  async goToLinkValidateLocator(linkLocator: Locator, validateLocator: Locator): Promise<void> {
    await expect(linkLocator).toBeVisible();
    await linkLocator.click();
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForLoadState('load');
    await expect(validateLocator).toBeVisible();
  }

  async goToBaseUrl(dynamicUrl: string, locatorToValidate?: Locator): Promise<void> {
    await this.page.goto(dynamicUrl);
    await this.page.waitForLoadState('networkidle');
    if(locatorToValidate) {
      await expect(locatorToValidate).toBeVisible();
    }
  }

  async validateFormLabel(labelText: string): Promise<void> {
    await this.waitForLoadState();
    await expect(this.formLabel.filter({ hasText: `${labelText}` }), `Validate Form label with text: ${labelText} is visible.`).toBeVisible();
  }

  async validateDialogTitle(labelText: string): Promise<void> {
    await this.waitForLoadState();
    await expect(this.dialogTitle.filter({ hasText: `${labelText}` }), `Validate Dialog Title with text: ${labelText} is visible.`).toBeVisible();
  }

  async validateRegionLabel(labelText: string): Promise<void> {
    await this.waitForLoadState();
    await expect(this.regionLabel.filter({ hasText: `${labelText}` }), `Validate Region label with text: ${labelText} is visible.`).toBeVisible();
  }

  async validateTitle(labelText: string): Promise<void> {
    await this.waitForLoadState();
    await expect(this.breadcrumbLabel.filter({ hasText: `${labelText}` }), `Validate Title with text: ${labelText} is visible.`).toBeVisible();
  }

  async validateHeader(labelText: string): Promise<void> {
    await this.waitForLoadState();
    //console.log(await this.regionHeader.innerText());
    await expect(this.regionHeader.filter({ hasText: `${labelText}` }), `Validate Header with text: ${labelText} is visible.`).toBeVisible();
  }

  async getTitle(): Promise<string> {
    await this.waitForLoadState();
    return await this.breadcrumbLabel.innerText();
  }

  async waitForLoadState(): Promise<void> {
    await test.step('Wait for the page to fully load (networkidle)', async () => {
      await this.page.waitForLoadState('load');
      await this.page.waitForLoadState('networkidle');
    });
  }

  async clickTableCell(locatorTable: Locator, row: number, column: number): Promise<void> {
    await test.step(`Click table(${row}, ${column}) cell.`, async () => {
      await locatorTable.locator("tr").nth(row-1).locator("td").nth(column-1).click();
    });
  }
  async clickTableCellText(locatorTable: Locator, text: string): Promise<void> {
    await test.step(`Click table cell with link: ${text}.`, async () => {
      console.log(locatorTable.locator(`tr:has(td:has(a:has-text("${text}")))`));
      //const row = locatorTable.locator(`tr:has(td:has-text("${text}"))`);
      //await row.locator(`td:has-text("${text}")`).click();
      await locatorTable.locator(`tr:has(td:has(a:has-text("${text}")))`).click();
    });
  }


  async clickTableLink(locatorTable: Locator, linkRow: number, linkColumn: number): Promise<void> {
    await test.step(`Click table(${linkRow}, ${linkColumn}) cell.`, async () => {
      await locatorTable.locator("tr").nth(linkRow-1).locator("td").nth(linkColumn-1).locator("a").click();
    });
  }

  async clickTableTextLink(locatorTable: Locator, text: string): Promise<void> {
    await test.step(`Click ${text} link in table.`, async () => {
      const row = locatorTable.locator(`tr:has(td:has-text("${text}"))`);
      await row.locator(`a:has-text("${text}")`).click({ timeout: 1000 });
      //await
      // locatorTable.locator("tr").nth(linkRow-1).locator("td").nth(linkColumn-1).locator("a").click();
    });
  }

  async validateTableCellText(locatorTable: Locator, intRow: number, intColumn: number, textToValidate: string): Promise<void> {
    await expect(locatorTable.locator("tr").nth(intRow).locator("td").nth(intColumn),
      `Validate text: ${textToValidate} is in table(${intRow}, ${intColumn}) cell.`).toContainText(textToValidate);
  }

  async validateTableCellTextValue(locatorTable: Locator, text: string, additionalText: string): Promise<void> {
    await test.step(`Search ${text}. in table.`, async () => {
      //console.log(locatorTable.locator(`tr:has(td:has-text("${text}"))`));
      const row = locatorTable.locator(`tr:has(td:has-text("${text}"))`).first();
      try {
        await expect(row.locator(`td:has-text("${text}")`), `Value: [${text}] is in the table.`).toBeVisible({ timeout: 100 });
        if (additionalText) {
          try {
            await expect(row.locator(`td:has-text("${additionalText}")`), `Value: [${additionalText}] is in the table.`).toBeVisible({ timeout: 100 });
          } catch {
            console.warn('⚠️ Soft assert failed:', `Value: [${additionalText}] is NOT in the table.`);
          }
        }
      } catch {
        console.warn('⚠️ Soft assert failed:', `Value: [${text}] is NOT in the table.`);
      }
    });
  }

  async validateTableRowTextValue(locatorTable: Locator,
                                  text: string,
                                  rowValues: string[],
                                  startColumn: number = 0): Promise<void> {
    await test.step(`Search ${text}. in table.`, async () => {
      //console.log(locatorTable.locator(`tr:has(td:has-text("${text}"))`));
      const row = locatorTable.locator(`tr:has(td:has-text("${text}"))`);
      const cells = row.locator('td');
      const cellCount = await cells.count();
      const columns = rowValues.length ?? cellCount;
      if (columns <= cellCount) {
        for (let i = 0; i < columns; i++) {
          const cell = cells.nth(i + startColumn);
          const textCell = await cell.textContent({timeout: 100});
          let value = rowValues[i] ?? "-";
          value = !isNaN(Number(value)) ? parseInt(value).toString() : value;
          value = value.trim();
          try {
            await expect(cell,
                         `Role: ${text}, 
                         Col: ${i + 1}, 
                         Value: ${value} is in the table.`).toHaveText(value, {timeout: 10});
          } catch {
            console.warn('⚠️ Soft assert failed:',
                         `ID: ${text}, Col: ${i + 1},
                                   Value: ${value} does not match table value: ${textCell}.`);
          }
        }
      } else {
        console.warn('⚠️ Soft assert failed:',
                     `ID: ${text} not found in table.`);
      }
    });
  }

  async getIndexByText(locator: Locator, text: string): Promise<number> {
  const count = await locator.count();

  for (let i = 0; i < count; i++) {
    const currentText = await locator.nth(i).innerText();
    if (currentText.trim() === text) {
      return i;
    }
  }
    return -1; // Not found
  }

  async clickAllLocator(locator: Locator): Promise<void> {
    const count = await locator.count();

    for (let i = 0; i < count; i++) {
      await locator.nth(i).click();
    }
  }

  async validateContainerClass(container: Locator, value: string, title?: string): Promise<void> {
    await expect(container.locator(`p.header_output_class:has-text('${value}')`)).toBeVisible();
    if(title) {
      await expect(container.locator(`p.Projec_heading_class:has-text('${title}')`)).toBeVisible();
    }
  }

  async validateContainer(container: Locator, value: string, title?: string): Promise<void> {
    await expect(container.locator("p").nth(1), `Validate Value: ${value}.`).toContainText(value);
    if(title) {
      await expect(container.locator("p").nth(0), `Validate Title: ${title}.`).toContainText(title);
    }
  }

  async changeRows(table: Locator, rowLocator: Locator, rows: string): Promise<void> {
    let rowCount = await table.locator("tr").count();
    await rowLocator.click();
    await this.page.keyboard.type(rows);
    await this.page.keyboard.press('Enter');
    if (rowCount > 0)
    {
      await expect(table.locator("tr")).not.toHaveCount(rowCount, { timeout: 5000 })
    }
    await this.waitForLoadState();
  }

  async clickTableControlTextValue(locatorTable: Locator, text: string, controlType: string): Promise<void> {
    await test.step(`Click ${controlType} control in row with text: ${text}.`, async () => {
      const row = locatorTable.locator(`tr:has(td:has-text("${text}"))`).first();
      //console.log(await row.count());
      await this.playwrightExtension.longClick(row.locator(`${controlType}`));
      //await row.locator(`${controlType}`).click({ timeout: 5000 });
    });
  }
}