import { AboutPage } from '../pages/about.po';
import { browser, logging } from 'protractor';

describe('About page tests', () => {
    let page: AboutPage;

    beforeAll(() => {
        page = new AboutPage();
    });

    it('should display page title', async () => {
        await page.navigateTo();
        expect(await page.getPageTitle()).toEqual('Personal Page');
    });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser
            .manage()
            .logs()
            .get(logging.Type.BROWSER);
        expect(logs).not.toContain(
            jasmine.objectContaining({
                level: logging.Level.SEVERE,
            } as logging.Entry)
        );
    });
});
