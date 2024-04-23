Inside that directory, you can run several commands:

  npx playwright test --headed
    Runs the tests in headed mode.

  npx playwright test
    Runs the end-to-end tests.

  npx playwright test --ui
    Starts the interactive UI mode.

  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test example
    Runs the tests in a specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

  npx playwright codegen
    Auto generate tests with Codegen.

We suggest that you begin by typing:

    npx playwright test

And check out the following files:
  - .\tests\example.spec.ts - Example end-to-end test
  - .\tests-examples\demo-todo-app.spec.ts - Demo Todo App end-to-end tests
  - .\playwright.config.ts - Playwright Test configuration

Visit https://playwright.dev/docs/intro for more information. ✨

With Playwright you can run a single test, a set of tests or all tests. Tests can be run on one browser or multiple browsers by using the --project flag. Tests are run in parallel by default and are run in a headless manner, meaning no browser window will be opened while running the tests and results will be seen in the terminal. However, you can run tests in headed mode by using the --headed CLI argument, or you can run your tests in UI mode by using the --ui flag. See a full trace of your tests complete with watch mode, time travel debugging and more.

EX: npx playwright test --project=chromium --project=firefox --headed --ui
EX2: npx playwright test example.spec.ts --project=chromium --project=firefox --headed --ui
EX3: npx playwright test fallout_merch.spec.ts --headed --trace on --project=chromium

