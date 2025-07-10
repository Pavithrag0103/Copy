import { expect, Locator, test } from '@playwright/test';
import { RmCommonComponent} from '../../../components/rm/common/rm-common.component';

export class RmCommonActions extends RmCommonComponent {

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
    await expect(linkLocator).toBeVisible()
    await linkLocator.click();
    await this.page.waitForLoadState('networkidle');
    console.log(await this.breadcrumbLabel.nth(intPlace).innerText());
    await expect(this.breadcrumbLabel.nth(intPlace)).toContainText(pageTitle);
  }

  async goToLinkValidateTitle(linkLocator: Locator, pageTitle: string, btnOpenMenu?: Locator): Promise<void> {
    await this.openMenuIfClosed(linkLocator, btnOpenMenu);
    await expect(linkLocator).toBeVisible()
    await linkLocator.click();
    await this.page.waitForLoadState('networkidle');
    //console.log(await this.breadcrumbLabel.nth(intPlace).innerText());
    await expect(this.breadcrumbLabel.filter({ hasText: `${pageTitle}` })).toBeVisible();
  }

  async goToLinkValidateLocator(linkLocator: Locator, validateLocator: Locator): Promise<void> {
    await expect(linkLocator).toBeVisible()
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

  async validateRegionLabel(labelText: string): Promise<void> {
    await this.waitForLoadState();
    await expect(this.regionLabel.filter({ hasText: `${labelText}` }), `Validate Region label with text: ${labelText} is visible.`).toBeVisible();
  }

  async validateTitle(labelText: string): Promise<void> {
    await this.waitForLoadState();
    await expect(this.breadcrumbLabel.filter({ hasText: `${labelText}` }), `Validate Title with text: ${labelText} is visible.`).toBeVisible();
  }

  async waitForLoadState(): Promise<void> {
    await test.step('Wait for the page to fully load (networkidle)', async () => {
      await this.page.waitForLoadState('networkidle');
    });
  }

  async clickTableCell(locatorTable: Locator, row: number, column: number): Promise<void> {
    await test.step(`Click table(${row}, ${column}) cell.`, async () => {
      await locatorTable.locator("tr").nth(row-1).locator("td").nth(column-1).click();
    });
  }

  async clickTableLink(locatorTable: Locator, linkRow: number, linkColumn: number): Promise<void> {
    await test.step(`Click table(${linkRow}, ${linkColumn}) cell.`, async () => {
      await locatorTable.locator("tr").nth(linkRow-1).locator("td").nth(linkColumn-1).locator("a").click();
    });
  }

  async validateTableCellText(locatorTable: Locator, intRow: number, intColumn: number, textToValidate: string): Promise<void> {
    await expect(locatorTable.locator("tr").nth(intRow).locator("td").nth(intColumn),
      `Validate text: ${textToValidate} is in table(${intRow}, ${intColumn}) cell.`).toContainText(textToValidate);
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
}