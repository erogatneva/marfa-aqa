import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage';
import * as fs from 'fs';

test('Доступность страницы Home', async ({ page }) => {
    const response = await page.goto('https://marfa.app/');
    expect(response?.status()).toBe(200);
});

test('Доступность страницы Data format', async ({ page }) => {
    const response = await page.goto('https://marfa.app/format');
    expect(response?.status()).toBe(200);
})

test('Доступность страницы About', async ({ page }) => {
    const response = await page.goto('https://marfa.app/about');
    expect(response?.status()).toBe(200);
})

test('Проверка рассчёта и скачивания файла', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    await homePage.selectSpeciesButtonSelect(homePage.speciesValue.water);
    await homePage.spectralIntervalLeftInputFill('500');
    await homePage.spectralIntervalRightInputFill('1000');
    await homePage.lineCutOffConditionInputFill('10');
    await homePage.temperatureInputFill('300');
    await homePage.pressureInputFill('1');
    await homePage.selectTargetValueButtonSelect(homePage.targetValue.absorptionCrossSection);
    await homePage.calculateButtonClick();
    await expect(homePage.calcMsg).toHaveText('Absorption spectra has been calculated ! ', { timeout: 300000 });
    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Download' }).click(),
    ]);
    const fileName = download.suggestedFilename();
    const filePath = './downloads/' + fileName;
    await download.saveAs(filePath);
    expect(fs.existsSync(filePath)).toBeTruthy();
});