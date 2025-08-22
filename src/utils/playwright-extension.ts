import {allure} from "allure-playwright";
import {Locator, expect} from "@playwright/test";
//import * as allure1 from "allure-report"

export class PlaywrightExtension {
  async softStep(name: string, fn: () => Promise<void>) {
    //await test.step(name, async () => {
      try {
        await fn();
      } catch (err) {
        console.warn(`⚠️ Warning in step "${name}"`);
        //console.warn(`⚠️ Warning in step "${name}":`, err.message);
        //allure.label('status', 'broken');
        //allure.step(`⚠️ Soft warning:"${name}" not visible`, async () => {});
      }
    //});
  }
  async softExpectVisible(name: string, locator: Locator, timeout: number = 1000): Promise<void> {
    try {
      await expect(locator, name).toBeVisible({timeout:1000});
    } catch (err) {
      console.warn(`⚠️ Warning in step "${name}":`, err.message);
      allure.label('status', 'broken'); // alternative workaround
      allure.step(`⚠️ Soft warning: "${name}"`, async () => {});
    }
  }
  async longClick(locator: Locator, durationMs: number = 1000) {
    const box = await locator.boundingBox();
    if (!box) throw new Error('Element not visible');

    const { x, y, width, height } = box;
    await locator.page().mouse.move(x + width / 2, y + height / 2);
    await locator.page().mouse.down();
    await locator.page().waitForTimeout(durationMs);
    await locator.page().mouse.up();
  }
}

export const playwrightExtension = new PlaywrightExtension();


/*
 await softStep('Check dashboard label', async () => {
 await expect(page.locator('#label')).toHaveText('Dashboard');
 });

 @allure.label

 @allure.step

 @allure.severity

 @allure.description

 ts
 Copy
 Edit
 import { test } from '@playwright/test';
 import { allure } from 'allure-playwright';

 test('example test', async ({ page }) => {
 allure.label('feature', 'Login');
 allure.severity('critical');
 allure.description('This verifies login functionality');

 await page.goto('https://example.com');
 });
* */