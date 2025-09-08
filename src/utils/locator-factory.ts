import { Page, Locator } from '@playwright/test';

export class LocatorFactory {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    getLocatorForProjectCodeCheckBox(projectCode: string): Locator {
        const xpath = `//td[text()="${projectCode}"]/../td[1]`;
        return this.page.locator(xpath);
    }

    getLocatorForFsaNameCheckBox(fsaName: string): Locator {
        const xpath = `//td[text()="${fsaName}"]/preceding-sibling::td/input[1]`;
        return this.page.locator(xpath);
    }

}
