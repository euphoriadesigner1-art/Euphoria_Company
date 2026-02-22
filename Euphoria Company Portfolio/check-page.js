import puppeteer from 'puppeteer';

(async () => {
    try {
        const browser = await puppeteer.launch({ headless: "new" });
        const page = await browser.newPage();

        page.on('console', msg => console.log('PAGE LOG:', msg.text()));
        page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
        page.on('requestfailed', request => {
            console.log('REQUEST FAILED:', request.url(), request.failure().errorText);
        });

        console.log("Navigating to http://localhost:5173");
        await page.goto('http://localhost:5173', { waitUntil: 'networkidle0', timeout: 30000 });
        console.log("Page loaded successfully.");
        await browser.close();
    } catch (error) {
        console.error("Script failed:", error);
        process.exit(1);
    }
})();
