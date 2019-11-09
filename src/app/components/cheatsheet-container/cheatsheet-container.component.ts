import { Component, OnInit, Input } from '@angular/core';

import { CheatsheetService } from '../../services/cheatsheet.service';
import { CheatsheetItem } from '../../store/models/cheatsheet-item.model';

import { Observable } from 'rxjs';

@Component({
    selector: 'app-cheatsheet-container',
    templateUrl: './cheatsheet-container.component.html',
    styleUrls: ['./cheatsheet-container.component.css'],
})
export class CheatsheetContainerComponent implements OnInit {
    cheatsheetItems$: Observable<CheatsheetItem[]>;

    public selectedCheatsheetItem: CheatsheetItem;

    childItemSeleceted(cheatsheetItem: CheatsheetItem) {
        this.selectedCheatsheetItem = cheatsheetItem;
    }

    constructor(public cheatsheetService: CheatsheetService) {}

    ngOnInit() {
        this.cheatsheetItems$ = this.cheatsheetService.getCheatsheetItems();
    }
}
