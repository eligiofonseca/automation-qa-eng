// @ts-check
import { test as setup, expect } from '@playwright/test';
import {STORAGE_STATE} from '../playwright.config'

setup.beforeEach(async ({ page }) => {
    await page.goto('https://en.wikipedia.org/wiki/Main_Page');
})

setup('test', async ({ page }) => {
    await page.getByRole('link', { name: 'Log in'}).click();
    await page.getByPlaceholder('Enter your username').fill(process.env.UNAME!);
    await page.getByPlaceholder('Enter your username').press('Enter');
    await page.getByPlaceholder('Enter your password').fill(process.env.PASSWORD!);
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.goto('https://en.wikipedia.org/w/index.php?title=Special:Homepage&source=personaltoolslink&namespace=0');
    await page.context().storageState({path: STORAGE_STATE});
});