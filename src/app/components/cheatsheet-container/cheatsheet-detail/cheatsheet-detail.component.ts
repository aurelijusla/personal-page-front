import { Component, OnInit, Input } from '@angular/core';

import { CheatsheetItem } from '../../../store/models/cheatsheet-item.model';

@Component({
    selector: 'app-cheatsheet-detail',
    templateUrl: './cheatsheet-detail.component.html',
    styleUrls: ['./cheatsheet-detail.component.css'],
})
export class CheatsheetDetailComponent implements OnInit {
    @Input() cheatsheetItem: CheatsheetItem;

    constructor() {}

    ngOnInit() {}

    copyInstallCommand(textCopied: string): void {
        let textCopiedElement = document.createElement('textarea');
        textCopiedElement.style.position = 'fixed';
        textCopiedElement.style.left = '0';
        textCopiedElement.style.top = '0';
        textCopiedElement.style.opacity = '0';
        textCopiedElement.value = textCopied;
        document.body.appendChild(textCopiedElement);
        textCopiedElement.focus();
        textCopiedElement.select();
        document.execCommand('copy');
        document.body.removeChild(textCopiedElement);
    }
}
