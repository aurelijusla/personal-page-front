import { AboutPage } from '../pages/about.po';
import { browser, logging } from 'protractor';

describe('About page tests', () => {
    let page: AboutPage;

    beforeAll(async () => {
        page = new AboutPage();
        await page.navigateTo();
    });

    it('should display page title', async () => {
        expect(await page.getPageTitle()).toEqual('Personal Page');
    });

    it('should have "About me" navigation item as active', async () => {
        expect(await page.getAboutMeButtonClass()).toContain('active-link');
    });

    it('should display a picture', async () => {
        expect(await page.isProfilePictureDisplayed()).toBe(true);
    });

    it('should display a bio', async () => {
        expect(await page.isBioDisplayed()).toBe(true);
    });

    // it('should be able to navigate to LinkedIn profile page', async () => {
    //     TODO;
    // });

    // it('should be able to navigate to GitHub profile page', async () => {
    //     TODO;
    // });

    // it('should be able to copy email address to clipboard', async () => {
    //     TODO;
    // });

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
