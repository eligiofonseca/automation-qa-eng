// @ts-check
import { test, expect } from '@playwright/test';

test('Vault 33 Pin H1', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('Search', { exact: true }).click();
  await page.getByLabel('Search', { exact: true }).fill('fallout 4 merch');
  await page.goto('https://www.google.com/search?q=fallout+4+merch&sca_esv=725efba4277893af&source=hp&ei=epgdZrGOF9HckPIP9_SniAU&iflsig=ANes7DEAAAAAZh2migZTG9L-zHC_CF-2MmmTF4TKwQY-&ved=0ahUKEwixs4W_kcWFAxVRLkQIHXf6CVEQ4dUDCBA&uact=5&oq=fallout+4+merch&gs_lp=Egdnd3Mtd2l6Ig9mYWxsb3V0IDQgbWVyY2gyCxAAGIAEGLEDGIMBMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESK8iUJ0OWPQgcAJ4AJABAJgBbqABrQiqAQQxNS4xuAEDyAEA-AEBmAISoAKhCqgCCsICEBAAGAMYjwEY5QIY6gIYjAPCAhAQLhgDGI8BGOUCGOoCGIwDwgIREC4YgAQYsQMYgwEYxwEY0QPCAgUQLhiABMICERAuGIMBGNQCGLEDGIAEGIoFwgIREC4YgAQYigUYsQMYgwEY1ALCAg4QABiABBiKBRixAxiDAcICDhAuGIAEGIoFGLEDGIMBwgILEC4YgAQYxwEY0QPCAgsQLhiDARixAxiABMICCxAuGIAEGLEDGIMBwgIOEC4YgwEY1AIYsQMYgASYAx2SBwQxNi4yoAfotQE&sclient=gws-wiz');
  await page.getByRole('link', { name: 'Fallout - Bethesda' }).click();
  await page.getByRole('button', { name: 'Deny' }).click();
  await page.getByRole('link', { name: 'Fallout Vault 33 Pin' }).click();
  await expect(page.locator('#ProductInfo-template--20055382393170__main')).toContainText('Fallout Vault 33 Pin');
});