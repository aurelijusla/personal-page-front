import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { CheatsheetService } from '../../../services/cheatsheet.service';
import { CheatsheetItem } from '../../../store/models/cheatsheet-item.model';

import { Observable } from 'rxjs';

@Component({
    selector: 'app-cheatsheet-sidenav',
    templateUrl: './cheatsheet-sidenav.component.html',
    styleUrls: ['./cheatsheet-sidenav.component.css'],
})
export class CheatsheetSidenavComponent implements OnInit {
    @Input() cheatsheetItems$: Observable<CheatsheetItem[]>;

    @Output() cheatsheetItemSelected: EventEmitter<
        CheatsheetItem
    > = new EventEmitter<CheatsheetItem>();

    selectedCheatsheetItem: CheatsheetItem;

    constructor() {}

    ngOnInit() {}

    onClick(cheatsheetItem: CheatsheetItem): void {
        this.cheatsheetItemSelected.emit(cheatsheetItem);
        this.selectedCheatsheetItem = cheatsheetItem;
    }
}
