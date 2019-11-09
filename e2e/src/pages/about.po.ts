import { browser, by, element } from 'protractor';

export class AboutPage {
    pageTitle: any;
    constructor() {
        this.pageTitle = element(
            by.cssContainingText('#title', 'Personal Page')
        );
    }

    async navigateTo() {
        return (await browser.get(browser.baseUrl)) as Promise<any>;
    }

    async getPageTitle() {
        return (await this.pageTitle.getText()) as Promise<string>;
    }
}
