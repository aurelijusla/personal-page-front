import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
    public emailTextDisplayed: string = 'Email';
    public emailAddress: string = 'aurelijus.lasys@gmail.com';

    constructor() {}

    ngOnInit() {}

    displayCopyText() {
        this.emailTextDisplayed = 'Click to copy';
    }

    displayEmailText() {
        this.emailTextDisplayed = 'Email';
    }

    copyEmailAddress(emailAddress) {
        let emailCopiedElement = document.createElement('textarea');
        emailCopiedElement.style.position = 'fixed';
        emailCopiedElement.style.left = '0';
        emailCopiedElement.style.top = '0';
        emailCopiedElement.style.opacity = '0';
        emailCopiedElement.value = emailAddress;
        document.body.appendChild(emailCopiedElement);
        emailCopiedElement.focus();
        emailCopiedElement.select();
        document.execCommand('copy');
        document.body.removeChild(emailCopiedElement);
    }
}
