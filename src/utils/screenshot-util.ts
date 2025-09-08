import { Page, Locator } from '@playwright/test';
import * as fs from "node:fs";
import * as path from 'path';
import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';

const ACTUAL_SCREENSHOT_DIR = path.join(require.main ? path.dirname(require.main.filename) : process.cwd(), 'screenshot', 'actual');

function ensureDirExists(dir: string) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

export class ScreenshotUtil {
    constructor(private page: Page) { }

    async captureAndSaveFullPageScreenshot(fileNameSuggestion: string): Promise<void> {
        ensureDirExists(ACTUAL_SCREENSHOT_DIR);
        const filePath = path.join(ACTUAL_SCREENSHOT_DIR, fileNameSuggestion);
        const screenshot = await this.page.screenshot({ fullPage: true });
        await fs.promises.writeFile(filePath, screenshot);
    }

    async captureAndSaveElementScreenshot(locator: Locator, fileNameSuggestion: string): Promise<void> {
        ensureDirExists(ACTUAL_SCREENSHOT_DIR);
        const filePath = path.join(ACTUAL_SCREENSHOT_DIR, fileNameSuggestion);
        const screenshot = await locator.screenshot();
        await fs.promises.writeFile(filePath, screenshot);
    }

    async captureAndCompareElementScreenshotWithThreshholdMatch(
        locator: Locator,
        baselineImagePath: string,
        threshold: number,
        fileNameSuggestion: string
    ): Promise<boolean> {
        ensureDirExists(ACTUAL_SCREENSHOT_DIR);
        const tempScreenshotPath = path.join(ACTUAL_SCREENSHOT_DIR, `temp_${Date.now()}_${fileNameSuggestion}`);
        await this.captureAndSaveElementScreenshot(locator, `temp_${Date.now()}_${fileNameSuggestion}`);

        const baselineImg = PNG.sync.read(await fs.promises.readFile(baselineImagePath));
        const testImg = PNG.sync.read(await fs.promises.readFile(tempScreenshotPath));

        if (baselineImg.width !== testImg.width || baselineImg.height !== testImg.height) {
            await fs.promises.unlink(tempScreenshotPath);
            throw new Error('Image dimensions do not match');
        }

        const diff = new PNG({ width: baselineImg.width, height: baselineImg.height });
        const numDiffPixels = pixelmatch(
            baselineImg.data,
            testImg.data,
            diff.data,
            baselineImg.width,
            baselineImg.height,
            { threshold }
        );

        await fs.promises.unlink(tempScreenshotPath);

        const totalPixels = baselineImg.width * baselineImg.height;
        const matchRatio = 1 - numDiffPixels / totalPixels;
        return matchRatio >= threshold;
    }
}