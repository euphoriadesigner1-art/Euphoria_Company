import { chromium } from 'playwright-chromium';

(async () => {
    try {
        const browser = await chromium.launch();
        const page = await browser.newPage();

        page.on('console', msg => console.log('PAGE LOG:', msg.type(), msg.text()));
        page.on('pageerror', err => console.log('PAGE ERROR:', err.message));

        console.log("Navigating to http://localhost:5173...");
        await page.goto('http://localhost:5173', { waitUntil: 'networkidle', timeout: 10000 });
        console.log("Loaded.");
        await browser.close();
    } catch (err) {
        console.error("Script failed:", err);
        process.exit(1);
    }
})();
