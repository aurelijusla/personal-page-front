import { browser, by, element } from 'protractor';

export class AboutPage {
    title: any;
    aboutMeButton: any;
    profilePicture: any;
    bio: any;
    constructor() {
        this.title = element(by.cssContainingText('#title', 'Personal Page'));
        this.aboutMeButton = element(by.css('[routerlink="/about-me"]'));
        this.profilePicture = element(by.css('#image-box'));
        // TODO: switch to real pic
        this.bio = element(by.css('#description-box'));
    }

    async navigateTo() {
        return (await browser.get(browser.baseUrl)) as string;
    }

    async getPageTitle() {
        return (await this.title.getText()) as string;
    }

    async getAboutMeButtonClass() {
        return (await this.aboutMeButton.getAttribute('class')) as string;
    }

    async isProfilePictureDisplayed() {
        return (await this.profilePicture.isDisplayed()) as boolean;
    }

    async isBioDisplayed() {
        return (await this.bio.isDisplayed()) as boolean;
    }
}
