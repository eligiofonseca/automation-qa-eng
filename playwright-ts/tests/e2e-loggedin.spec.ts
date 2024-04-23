//To Run: Comment out all browsers in config file first.
// @ts-check
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://en.wikipedia.org/wiki/Main_Page');
})

test('menu', async ({ page }) => {
    test.setTimeout(120000);
    await page.getByRole('link', { name: 'Efonsecajr' }).click();
    await expect(page.getByRole('heading', { name: /Efonsecajr/i })).toBeVisible();
    await page.getByRole('link', { name: 'Efonsecajr' }).click();
    await page.getByRole('link', { name: 'User page' }).click();
    await page.goto('https://en.wikipedia.org/w/index.php?title=User_talk:Efonsecajr&action=edit&redlink=1');
    await page.getByRole('link', { name: 'Alerts (0)' }).click();
    await page.getByRole('link', { name: 'All notifications' }).click();
    await page.getByRole('link', { name: 'Notices (0)' }).click();
    await page.getByRole('button', { name: 'Personal tools' }).check();
    await page.getByRole('link', { name: 'Preferences' }).click();
});

test('logout', async ({ page }) => {
    test.setTimeout(180000);
    await page.getByRole('button', { name: 'Personal tools' }).check();
    await page.getByRole('link', { name: 'Log out' }).click();
    await page.getByRole('heading', { name: 'Log out' }).click();
})