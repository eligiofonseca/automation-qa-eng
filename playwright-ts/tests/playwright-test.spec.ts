// @ts-check
import { test, expect } from '@playwright/test';

test.describe('Checking that the courses page is functional ', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://sdetunicorns.com/');
    });

    test('Click on courses link', async ({ page }) => {
        test.setTimeout(120000);
        // Get the Courses link and click on it
        await page.locator('#masthead').getByRole('link', { name: 'Courses' }).click();
        // Check that we are on the courses URL
        await expect(page).toHaveURL(/courses/);
    });

    test('Check course page elements', async ({ page }) => {
        test.setTimeout(120000);
        // Get the Courses link and click on it
        await page.locator('#masthead').getByRole('link', { name: 'Courses' }).click();
        // Checks that the "Join Academy" button is visible
        await expect(page.getByRole('button', { name: 'JOIN ACADEMY'})).toBeVisible();
        // Checks that the courses Carousel is visible
        await expect(page.locator('.elementor-loop-container')).toBeVisible()
        // Make an HTTP GET request to the courses endpoint
        const response = await page.evaluate(async () => {
            const response = await fetch("https://sdetunicorns.com/courses/");
            return {
                ok: response.ok // Check if response status is OK
            };
        });
        // Expect the response status to be an OK response (HTTP 200)
        await expect(response.ok).toBeTruthy();
    })

});

test.describe('Checking that the search func is ok ', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://sdetunicorns.com/');
    });

    test('Search for term: Javascript', async ({ page }) => {
        await page.getByRole('button', { name: 'Search' }).click();
        await expect(page.getByRole('searchbox', { name: 'Search' })).toBeEmpty();
        await page.getByRole('searchbox', { name: 'Search' }).click();
        await page.getByRole('searchbox', { name: 'Search' }).fill('javascript');
        await page.getByRole('searchbox', { name: 'Search' }).press('Enter');
        await expect(page.locator('section').filter({ hasText: 'Search Search Results for:' }).getByPlaceholder('Search...')).toBeVisible();
        await expect(page.locator('h1')).toContainText('Search Results for: javascript');
        });
});

test.describe('Global Nav', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://sdetunicorns.com/');
    });
    test('Global Nav> Menu Item Clicky Check', async ({ page }) => {
        await page.locator('#masthead').getByRole('link', { name: 'Home' }).click();
        await page.locator('#masthead').getByRole('link', { name: 'Courses' }).click();
        await page.locator('#masthead').getByRole('link', { name: 'Blog' }).click();
        await page.getByRole('link', { name: 'Resources ' }).click();
        await page.getByRole('link', { name: 'Contact' }).click();
        await page.getByRole('link', { name: 'Join Academy' }).click();
        await page.getByRole('button', { name: 'Search' }).click();
        const page1Promise = page.waitForEvent('popup');
        await page.getByRole('link', { name: 'Login' }).click();
        const page1 = await page1Promise;
        await page1.goto('https://academy.sdetunicorns.com/member/#/');
    });

    test('Global Nav>Login Form Element Check', async ({ page }) => {
        await page.goto('https://academy.sdetunicorns.com/member/#/');
        await expect(page.locator('.col-md-8')).toBeVisible();
        await expect(page.getByRole('img', { name: 'application__logo' })).toBeVisible();
        await expect(page.getByPlaceholder('Email')).toBeEmpty();
        await expect(page.getByPlaceholder('Password')).toBeEmpty();
        await page.getByRole('button').first().click();await expect(page.getByText('Forgot PasswordSign In Don\'t')).toBeVisible();
        await expect(page.getByText('Don\'t have an account? Create')).toBeVisible();
        await page.getByRole('link', { name: 'Forgot Password' }).click();
    });
    
});


test.describe('Smoke Test', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://sdetunicorns.com/');
    });
    test('Homepage', async ({ page }) => {
        test.setTimeout(120000);
        await expect(page.locator('.elementor-widget-wrap > .elementor-section > .elementor-container > div > .elementor-widget-wrap > .elementor-element > .elementor-widget-container').first()).toBeVisible();
        await page.getByRole('img', { name: 'automated software testing' }).first().click();
        await page.getByText('The aim for all the course').click();
        await expect(page.locator('#page')).toContainText('Completing the courses and their associated exercises will ensure you are able to crack automation related questions in an interview and showcase your skills in a new role.');
        await page.getByRole('tab', { name: 'kunal mobile testimonial' }).click();
        await page.getByRole('link', { name: 'Richard on API Automation' }).click();
        await page.getByRole('tab', { name: 'Can I cancel anytime?' }).locator('i').first().click();
        await page.locator('#colophon').getByRole('link', { name: 'Home' }).click();
    });

});

// test.describe('Test Suite', () => {
    // test.beforeEach(async ({ page }) => {
    //     await page.goto('https://sdetunicorns.com/');
    // });
//     test('Test Case', async ({ page }) => {
//
//     });
//     test('Test Case', async ({ page }) => {
//
//     });
// });