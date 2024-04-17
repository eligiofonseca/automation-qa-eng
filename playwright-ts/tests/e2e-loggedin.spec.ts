// @ts-check
import { test, expect } from '@playwright/test';

test('menu', async ({ page }) => {
    await page.goto('https://en.wikipedia.org/wiki/Main_Page');
    await page.getByRole('link', { name: 'Efonsecajr' }).click();
    await expect(page.getByRole('heading', { name: /Efonsecajr/i })).toBeVisible();
    await page.getByRole('link', { name: 'Efonsecajr' }).click();
    await page.getByRole('link', { name: 'User page' }).click();
    await page.goto('https://en.wikipedia.org/w/index.php?title=User_talk:Efonsecajr&action=edit&redlink=1');
    await page.getByRole('link', { name: 'Alerts (0)' }).click();
    await page.getByRole('link', { name: 'All notifications' }).click();
    await page.getByRole('link', { name: 'Watchlist' }).click();
    await page.getByRole('link', { name: 'Notices (0)' }).click();
    await page.getByRole('button', { name: 'Personal tools' }).check();
    await page.getByRole('link', { name: 'Preferences' }).click();
});
